import AppCollaborate from "@/components/app-collaborate";
import AppFunnel from "@/components/app-funnel";
import AppLastPosts from "@/components/app-last-posts";
import AppLastVideos from "@/components/app-last-videos";
import AppNewsletter from "@/components/app-newsletter";
import AppNumbers from "@/components/app-numbers";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 " id="home-page">
      <AppNewsletter />
      <AppFunnel />
      <AppLastVideos />
      <AppCollaborate />
      <AppNumbers />
      <AppLastPosts />
    </main>
  );
}
