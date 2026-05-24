"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useTranslation } from "react-i18next";

const segmentKeyMap: Record<string, string> = {
  about: "about",
  partners: "partnersNav",
  services: "servicesNav",
  projects: "projectsNav",
  contact: "contactNav",
};

export default function BreadcrumbsNav() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const pathnames = pathname.split("/").filter((x) => x);

  const label = (segment: string) => {
    const key = segmentKeyMap[segment];
    return key ? t(key) : segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={isRTL ? <ChevronLeftIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
      sx={{ mb: 3 }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "#32CD32" }}>
        {t("home")}
      </Link>

      {pathnames.map((value, index) => {
        const href = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={href} color="text.primary">
            {label(value)}
          </Typography>
        ) : (
          <Link key={href} href={href} style={{ textDecoration: "none", color: "inherit" }}>
            {label(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
