import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import { COOKIE_KEY } from "@/components/CookieConsent";
import { SocialLinks } from "@/components/SocialLinks";

const spotifyAlbumId = import.meta.env.VITE_SPOTIFY_ALBUM_ID;
const spotifyAlbumURL = import.meta.env.VITE_SPOTIFY_ALBUM_URL;
const appleMusicAlbumURL = import.meta.env.VITE_APPLE_MUSIC_ALBUM_URL;
const youtubeAlbumURL = import.meta.env.VITE_YOUTUBE_ALBUM_URL;
const amazonMusicAlbumURL = import.meta.env.VITE_AMAZON_MUSIC_ALBUM_URL;

const MusicPage = () => {
  const { t } = useTranslation();
  const consent = localStorage.getItem(COOKIE_KEY);

  return (
    <Card variant="glass" size="large">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("musicPage.title")}
        </CardTitle>
        <CardDescription>{t("musicPage.description")}</CardDescription>
        <CardDescription className="flex items-center gap-2">
          <FaCalendar className="h-4 w-4 text-muted-foreground" />
          <span>
            {t("musicPage.formattedReleaseDate", {
              releaseDate: t("musicPage.releaseDate"),
            })}
          </span>
        </CardDescription>
        <Separator />
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto">
        <div className="prose prose-stone dark:prose-invert max-w-none">
          <img
            src="/img/tf-album-art-1.png"
            alt={t("musicPage.albumArtAlt")}
            className="w-full md:w-96 md:float-left md:mr-8 mb-6 rounded-xl shadow-lg"
          />
          <div className="space-y-4 text-sm leading-relaxed">
            {Array.from({ length: 5 }).map((_, i) => (
              <p key={`paragraph${i}`}>
                {t(`musicPage.content.paragraph${i + 1}`)}
              </p>
            ))}
          </div>

          {consent === "true" && (
            <div className="clear-both pt-8 w-full">
              <iframe
                src={`https://open.spotify.com/embed/album/${spotifyAlbumId}`}
                width="100%"
                height="380"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl shadow-lg min-h-[380px]"
              ></iframe>
            </div>
          )}

          {/* Embedded YouTube Promo Video */}
          <div className="clear-both pt-8 w-full flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_smicMI7Z74"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

        <div className="clear-both pt-8 w-full flex justify-center">
          <SocialLinks
            spotifyUrl={spotifyAlbumURL}
            appleMusicUrl={appleMusicAlbumURL}
            youtubeUrl={youtubeAlbumURL}
            amazonMusicUrl={amazonMusicAlbumURL}
          />
        </div>
      </CardContent>

      <div className="mt-auto">
        <Separator className="my-4" />
        <CardFooter>
          <Button variant="ghost" size="lg" asChild>
            <Link to="/">
              <FaArrowLeft className="mr-2" />
              {t("navigation.back")}
            </Link>
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default MusicPage;
