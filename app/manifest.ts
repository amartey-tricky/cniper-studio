import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cniper Studio App",
    short_name: "Cniper Studio",
    description:
      "A portfolio app by Cniper Studio to display apps it has undertaken",
    start_url: "/",
    display: "fullscreen",
    background_color: "#fefefe",
    theme_color: "#fefefefe",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
