"use client";

export const dynamic = "force-static";

import ScriptItem from "@/app/scripts/_components/ScriptItem";
import { Category } from "@/lib/types";
import { Loader2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Sidebar from "./_components/Sidebar";

function ScriptContent() {
  const [selectedScript, setSelectedScript] = useState<string | null>(null);
  const [links, setLinks] = useState<Category[]>([]);
  const searchParams = useSearchParams();

  const sortCategories = (categories: Category[]): Category[] => {
    return categories.sort((a: Category, b: Category) => {
      if (
        a.catagoryName === "Proxmox VE Tools" &&
        b.catagoryName !== "Proxmox VE Tools"
      ) {
        return -1;
      } else if (
        a.catagoryName !== "Proxmox VE Tools" &&
        b.catagoryName === "Proxmox VE Tools"
      ) {
        return 1;
      } else {
        return a.catagoryName.localeCompare(b.catagoryName);
      }
    });
  };

  useEffect(() => {
    fetch('/api/categories')
      .then(response => response.json())
      .then(categories => {
        const sortedCategories = sortCategories(categories);
        setLinks(sortedCategories);
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setSelectedScript(id);
    } else {
      setSelectedScript(null);
    }
  }, [searchParams, setSelectedScript]);

  return (
    <div className="mb-3">
      <div className="mt-20 flex sm:px-4 xl:px-0">
        <div className="hidden sm:flex">
          <Sidebar
            items={links}
            selectedScript={selectedScript}
            setSelectedScript={setSelectedScript}
          />
        </div>
        <div className="mx-7 w-full sm:mx-0 sm:ml-7">
          <ScriptItem
            items={links}
            selectedScript={selectedScript}
            setSelectedScript={setSelectedScript}
          />
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-background px-4 md:px-6">
          <div className="space-y-2 text-center">
            <Loader2 className="h-10 w-10 animate-spin" />
          </div>
        </div>
      }
    >
      <ScriptContent />
    </Suspense>
  );
}