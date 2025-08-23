"use client";

import { forwardRef, useLayoutEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import { pixelsPerMinute } from "@/constants";
import Hour from "./hour";
import Programs from "./programs";
import ChannelLogos from "@/components/epg/channel-logos";
import Padding from "./padding";
import type { EPGData } from "@/types/epg";
import { createPortal } from "react-dom";

interface HoursProps {
  epgData: EPGData;
}

const Hours = forwardRef<HTMLDivElement, HoursProps>(({ epgData }, ref) => {
  const channelLogos = epgData.channels.map((channel) => channel.images);

  const [nowPosition, setNowPosition] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasScrolled = useRef(false);
  const paddingRef = useRef<HTMLDivElement>(null);
  const [paddingWidth, setPaddingWidth] = useState(0);

  // Estado para almacenar el contenedor del portal
  const [portalContainer, setPortalContainer] = useState<Element | null>(null);

  // Montar el contenedor solo en el cliente
  useLayoutEffect(() => {
    setPortalContainer(document.getElementById("portal-root"));
  }, []);

  // Medir la anchura del padding dinámicamente
  useLayoutEffect(() => {
    if (paddingRef.current) {
      setPaddingWidth(paddingRef.current.offsetWidth);
    }
  }, []);

  useLayoutEffect(() => {
    const update = () => {
      const minutesNow = dayjs().diff(dayjs().startOf("day"), "minutes");
      setNowPosition(minutesNow * pixelsPerMinute + paddingWidth);
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, [paddingWidth]);

  useLayoutEffect(() => {
    if (scrollRef.current && !hasScrolled.current && nowPosition !== -1) {
      const container = scrollRef.current;
      const centerOffset = nowPosition - container.clientWidth / 2;
      container.scrollLeft = Math.max(centerOffset, 0);
      hasScrolled.current = true;
    }
  }, [nowPosition]);

  return (
    <div
      className="w-full flex overflow-auto flex-col min-h-0 flex-1"
      ref={scrollRef}
    >
      {/* Wrapper relativo que incluye horas + programas */}
      <div className="relative w-fit">
        {/* Línea de tiempo global */}
        {nowPosition !== -1 && (
          <div
            className="absolute top-8 bottom-0 bg-red-500 z-40"
            style={{
              left: nowPosition - 1,
              width: 2,
            }}
          />
        )}

        {portalContainer &&
          createPortal(
            <div className="absolute bottom-8 right-8 z-100">
              <button
                className="bg-yellow-700 text-white px-2 py-1 rounded"
                onClick={() => {
                  if (scrollRef.current && nowPosition !== -1) {
                    const container = scrollRef.current;
                    const centerOffset =
                      nowPosition - container.clientWidth / 2;
                    container.scrollLeft = Math.max(centerOffset, 0);
                  }
                }}
              >
                Now
              </button>
            </div>,
            portalContainer
          )}

        {/* Cabecera de horas */}
        <div
          className="w-full flex items-center flex-row sticky top-0 bg-background z-40"
          ref={ref}
        >
          <div ref={paddingRef}>
            <Padding />
          </div>
          {Array.from({ length: 24 }, (_, k) => k).map((value) => (
            <Hour key={`hour-${value}`} hour={value} />
          ))}

          {/* Línea gruesa dentro del header (se queda fija al hacer scroll vertical) */}
          {nowPosition !== -1 && (
            <div
              className="absolute top-0 h-8 bg-red-500 z-50 rounded-full"
              style={{
                left: nowPosition - 2, // 4px grosor / 2
                width: 4,
              }}
            />
          )}
        </div>

        {/* Bloque de logos + programas */}
        <div className="w-fit flex items-start">
          <ChannelLogos logos={channelLogos} />
          <div className="w-full h-full">
            {epgData.channels.map((channel) => (
              <Programs key={channel.id} programs={channel.schedules} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Hours;
