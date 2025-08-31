---
type: PageLayout
title: Hello Lynda
colors: colors-a
sections:
  - type: HeroSection
    colors: colors-f
    title: "Hello, Lynda!"
    subtitle: "Just saying hi from boblemieux.ai — testing our content pipeline."
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-24, pb-12, pl-4, pr-4]
        alignItems: center
        justifyContent: center
        flexDirection: column
      title: { textAlign: center }
      subtitle: { textAlign: center }

  - type: HeroSection
    colors: colors-c
    media:
      type: ImageBlock
      url: /images/IMG_8764.jpg   # or /IMG_8764.jpg if you uploaded directly under /public
      altText: "Lynda in a purple Furman University hoodie"
      caption: "Hello from Bob 😊"
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-6, pb-36, pl-4, pr-4]
        alignItems: center
        justifyContent: center
        flexDirection: column
---
