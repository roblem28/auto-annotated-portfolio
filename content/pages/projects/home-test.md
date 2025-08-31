---
type: PageLayout
title: Home (Test)
colors: colors-a
backgroundImage:
  type: BackgroundImage
  url: /images/bg1.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 75

sections:
  - type: HeroSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    title: "AI, robots & mechanical completion — built for the field"
    subtitle: >-
      I turn messy, real-world problems into working systems: scheduling &
      controls, MC/turnover, safety, and on-device agents. Explore the projects
      and see how I work.
    actions:
      - type: Button
        label: See projects
        url: /projects
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
      - type: Button
        label: About
        url: /info
        showIcon: false
        style: secondary
    styles:
      self:
        height: auto
        width: wide
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-36, pb-48, pl-4, pr-4]
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title: { textAlign: left }
      subtitle: { textAlign: left }
      text: { textAlign: left }
      actions: { justifyContent: flex-start }

  - type: HeroSection
    colors: colors-c
    backgroundSize: full
    elementId: ''
    title: "Current focus"
    subtitle: >-
      Marley1 handheld (Raspberry Pi 5), SafetyBob 2.0 (virtual safety rep),
      Copilot for Power BI on Fabric, and a 3D-printed AI quadruped.
    media:
      type: ImageBlock
      url: /images/Born Lightwalker.PNG
      altText: Born Lightwalker
      caption: Born Lightwalker
      elementId: ''
    actions:
      - type: Button
        label: Contact
        url: /info
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    styles:
      self:
        height: auto
        width: wide
        padding: [pt-36, pb-48, pl-4, pr-4]
        alignItems: center
        justifyContent: center
        flexDirection: row
      title: { textAlign: left }
      subtitle: { textAlign: left }
      text: { textAlign: left }
      actions: { justifyContent: flex-start }

  - type: FeaturedProjectsSection
    elementId: ''
    colors: colors-f
    backgroundSize: full
    subtitle: Projects
    actions:
      - type: Link
        label: See all projects
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/faa-link.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-24, pb-24, pl-4, pr-4]
        justifyContent: center
      title: { textAlign: left }
      subtitle: { textAlign: left }
      actions: { justifyContent: flex-end }

  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Got an interesting project? Tell me more…"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: First Name
          hideLabel: true
          placeholder: First Name
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Last Name
          hideLabel: true
          placeholder: Last Name
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
        - name: message
          label: Message
          hideLabel: true
          placeholder: How can I help?
          isRequired: true
          width: full
          type: TextareaFormControl
        - name: updatesConsent
          label: Sign me up to receive updates
          isRequired: false
          width: full
          type: CheckboxFormControl
      submitLabel: "Submit"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin: [mt-0, mb-0, ml-0, mr-0]
        padding: [pt-24, pb-24, pr-4, pl-4]
        alignItems: center
        justifyContent: center
        flexDirection: row
      title: { textAlign: left }
      text: { textAlign: left }
---
