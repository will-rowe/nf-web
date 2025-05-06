import { FaYoutube, FaSpotify, FaApple, FaAmazon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
interface SocialLinksProps {
  youtubeUrl?: string;
  spotifyUrl?: string;
  appleMusicUrl?: string;
  amazonMusicUrl?: string;
  className?: string;
}

export const SocialLinks = ({
  youtubeUrl,
  spotifyUrl,
  appleMusicUrl,
  amazonMusicUrl,
  className = "",
}: SocialLinksProps) => {
  const { t } = useTranslation();
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <p className="text-sm text-muted-foreground">
        {t("components.socialLinks.availableOnStreamingPlatforms")}
      </p>
      <div className="flex gap-4">
        {youtubeUrl && (
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        )}

        {spotifyUrl && (
          <a
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-600 transition-colors"
            aria-label="Spotify"
          >
            <FaSpotify size={24} />
          </a>
        )}

        {appleMusicUrl && (
          <a
            href={appleMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors"
            aria-label="Apple Music"
          >
            <FaApple size={24} />
          </a>
        )}

        {amazonMusicUrl && (
          <a
            href={amazonMusicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-600 transition-colors"
            aria-label="Amazon Music"
          >
            <FaAmazon size={24} />
          </a>
        )}
      </div>
    </div>
  );
};
