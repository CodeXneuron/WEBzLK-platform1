import { Download, MonitorPlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SetupForgeSectionProps {
  downloadLink?: string;
}

export function SetupForgeSection({ downloadLink = "#" }: SetupForgeSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-card/50 border-y">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow">
              New Release
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Introducing <span className="text-primary">Setup-forge V1.0.0</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Bought a new laptop or PC? Setup-forge V1.0.0 makes setting up your new device a breeze. With just a few touches, our platform will automatically install all your basic software and configure everything to your exact preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link href={downloadLink}>
                  <Download className="h-5 w-5" />
                  Download for PC
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="aspect-video overflow-hidden rounded-xl border bg-background shadow-2xl flex items-center justify-center relative group">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent transition-opacity group-hover:opacity-75" />
               <div className="text-center p-6 relative z-10 flex flex-col items-center">
                 <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <MonitorPlay className="h-12 w-12 text-primary" />
                 </div>
                 <h3 className="font-semibold text-xl text-primary">Setup-forge V1.0.0</h3>
                 <p className="text-sm text-muted-foreground mt-2">Automated Software Setup Assistant</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
