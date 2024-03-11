"use client";
import React from "react";
import { Button } from "./moving-border";
import Link from "next/link";

export function MovingBorderButton() {
  return (
    <div>
      <Link href="/contact">
        <Button
          borderRadius="1.75rem"
          className="bg-white text-black border-neutral-200"
        >
          Contact Us
        </Button>
      </Link>
    </div>
  );
}
