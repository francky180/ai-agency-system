import SystemStatus from "@/components/SystemStatus";

export const metadata = {
  title: "System Status — AI Agency System",
  description: "Live status of all AI agency subsystems.",
};

export default function SystemStatusPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <SystemStatus />
    </main>
  );
}
