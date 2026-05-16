"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface SwitcherProps {
  contentView: React.ReactNode;
  chatView: React.ReactNode;
}

function SwitcherInner({ contentView, chatView }: SwitcherProps) {
  const searchParams = useSearchParams();
  const isChat = searchParams?.get("view") === "chat";

  return <>{isChat ? chatView : contentView}</>;
}

export default function SupportCenterSwitcher({ contentView, chatView }: SwitcherProps) {
  return (
    <Suspense fallback={<div className="w-full py-12 text-center text-slate-400 font-medium">Resolving interactive secure console view...</div>}>
      <SwitcherInner contentView={contentView} chatView={chatView} />
    </Suspense>
  );
}
