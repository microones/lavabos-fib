"use client";
import { authClient } from "@/lib/client/auth";
import { useRouter } from "next/navigation";
import SmallButton from "@/components/ui/SmallButton";

export function LogoutButton({ className = "", onDone }: { className?: string; onDone?: () => void }) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          onDone?.();
          router.push("/imatges");
          router.refresh();
        },
      },
    });
  };

  return (
    <SmallButton onClick={handleLogout} variant="ghost" className={className}>
      Surt
    </SmallButton>
  );
}
