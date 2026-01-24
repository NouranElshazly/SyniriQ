"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function BreadcrumbsNav() {
  const pathname = usePathname(); // e.g. "/about/team"
  const pathnames = pathname.split("/").filter((x) => x); // ["about", "team"]

  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      separator={<ChevronRightIcon fontSize="small" />}
      sx={{ mb: 3 }}
    >
      {/* Home link */}
      <Link href="/" style={{ textDecoration: "none", color: "#32CD32" }}>
        Home
      </Link>

      {/* Dynamic parts */}
      {pathnames.map((value, index) => {
        const href = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={href} color="text.primary" sx={{ textTransform: "capitalize" }}>
            {value}
          </Typography>
        ) : (
          <Link
            key={href}
            href={href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
