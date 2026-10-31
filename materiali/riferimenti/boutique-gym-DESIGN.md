---
version: alpha
name: Gym Website Design System for Boutique Fitness Studios
description: "Gym website design system for boutique fitness studios, CrossFit boxes and personal trainers: class schedule, memberships, trainers and free trial. Graphite, clay orange and sand with a bold condensed display type."
colors:
  primary: "#16181D"
  on-primary: "#FFFFFF"
  secondary: "#B03E1C"
  on-secondary: "#FFFFFF"
  tertiary: "#F2643A"
  tertiary-hover: "#E4532A"
  on-tertiary: "#1A0A04"
  neutral: "#8A8B90"
  soft: "#E6E1D8"
  on-soft: "#16181D"
  background: "#F2EEE8"
  on-background: "#16181D"
  surface: "#FFFFFF"
  surface-alt: "#E9E4DC"
  on-surface: "#16181D"
  on-surface-muted: "#545760"
  outline: "#DDD6CB"
  success: "#2F7D4F"
  on-success: "#FFFFFF"
  error: "#B3261E"
  on-error: "#FFFFFF"
typography:
  display:
    fontFamily: Anton
    fontSize: 56px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Anton
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Anton
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Anton
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.25
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.2
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.04em
  stat:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: 400
    lineHeight: 1.0
    letterSpacing: -0.01em
rounded:
  none: 0px
  sm: 2px
  md: 4px
  lg: 8px
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  2xl: 64px
  3xl: 96px
  gutter: 24px
  max-width: 1200px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px 24px
    height: 48px
  button-accent-hover:
    backgroundColor: "{colors.tertiary-hover}"
    textColor: "{colors.on-tertiary}"
  button-soft:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.on-soft}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.md}"
    padding: 14px 24px
  button-link:
    backgroundColor: "{colors.background}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-lg}"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 12px 16px
    height: 48px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-alt:
    backgroundColor: "{colors.surface-alt}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.lg}"
    padding: 24px
  card-featured:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.headline-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  eyebrow:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-md}"
  chip:
    backgroundColor: "{colors.soft}"
    textColor: "{colors.on-soft}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  chip-accent:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px
  stat:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.stat}"
  caption:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    typography: "{typography.body-sm}"
  nav:
    backgroundColor: "{colors.background}"
    textColor: "{colors.on-background}"
    typography: "{typography.label-lg}"
    height: 72px
  footer:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.body-sm}"
    padding: 64px 24px
  badge-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 10px
  alert-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: 16px
  divider:
    backgroundColor: "{colors.outline}"
    height: 1px
  icon-muted:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface-muted}"
    size: 24px
---

# Gym Website Design System for Boutique Fitness Studios

## Overview

A gym website design system for boutique fitness studios, CrossFit boxes, boxing clubs and personal trainers. It should feel strong and motivating without shouting: big condensed headlines, confident graphite, one warm clay-orange for action and plenty of real training photography. The main goals are the free trial and the class schedule.

Fonts were chosen with full Latin Extended coverage, so Polish, Czech and other Central European diacritics (ą, ę, ł, ż, ř, ů) render correctly in every weight.

## Colors

A calm, nature-based palette: one deep color for structure, one mid tone for accents and one warm color for action.

- **Graphite (#16181D):** primary. Text, headers, schedule grid, featured cards and the footer.
- **Burnt Clay (#B03E1C):** secondary. Eyebrows, links and class-type labels.
- **Clay Orange (#F2643A):** tertiary and the main action color: `Start free trial`, `Book class`, always with dark text.
- **Sand (#E6E1D8):** soft surface for secondary buttons, filters and membership comparison rows.
- **Chalk (#F2EEE8):** page background; cards are white.

## Typography

**Anton** for headlines and big numbers: tall, condensed and athletic, always uppercase. **Inter** for body text, schedules, prices and forms. Class times and prices are set in Inter Bold.

## Layout

Home page: full-bleed training photo with an uppercase headline and `Start free trial`, class types grid, a weekly schedule table, memberships with three price cards, trainers, transformation stories and location. The schedule is a 7-column grid on desktop and a day picker with a list on phones. Spacing is built on 8px.

## Elevation & Depth

Almost flat and hard-edged. Depth comes from strong photo crops and graphite blocks; only the membership card marked `Most popular` lifts with `0 12px 28px rgba(22, 24, 29, 0.18)`.

## Shapes

Sharp and athletic: 4px for buttons and inputs, 8px for cards, 2px for tags. Diagonal section edges (6 degrees) are allowed once per page.

## Components

- **Free trial button:** clay orange with graphite text, 4px radius, uppercase label.
- **Class card:** photo, Anton class name, intensity bars (1-3), duration and trainer.
- **Schedule grid:** graphite header, time rows, class chips colored by type on sand.
- **Membership card:** price in Anton, monthly/annual toggle, checklist of perks; `Most popular` card in graphite with white text.

## Do's and Don'ts

- Do use real people training in the studio, not stock models.
- Do keep the free trial button visible on every screen.
- Don't use neon colors or gradients.
- Don't set body text in Anton; it is for headlines and numbers only.
