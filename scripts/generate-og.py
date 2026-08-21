#!/usr/bin/env python3
"""Generate 1200x630 Open Graph PNGs for the top routes."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

OUT = Path("public/images/og")
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1200, 630
INK = (15, 15, 18)
COBALT = (30, 79, 216)
TEAL = (14, 165, 233)
CREAM = (247, 244, 239)
MUTED = (180, 190, 210)

PAGES = [
    ("default", "Cognivac", "Enterprise AI & software that ships"),
    ("home", "Cognivac", "AI systems that survive production"),
    ("services", "Services", "Engineering, with AI built into the work"),
    ("industries", "Industries", "Domain context, not just capacity"),
    ("contact", "Contact", "Talk to an engineer, not a routing form"),
    ("security", "Security", "Built to clear review, not survive it"),
    ("pricing", "Engagement", "Discovery first, then a priced build"),
    ("about", "About", "A software partner for real operations"),
    ("blog", "Insights", "Notes from the engineering floor"),
]


def font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont:
    names = (
        [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]
        if bold
        else [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        ]
    )
    for name in names:
        path = Path(name)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


def paint(slug: str, kicker: str, title: str) -> None:
    img = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(img)

    draw.ellipse((-180, -220, 520, 420), fill=(22, 40, 110))
    draw.ellipse((780, 280, 1380, 860), fill=(10, 70, 110))
    draw.rectangle((0, 0, 12, H), fill=COBALT)
    draw.rectangle((0, H - 8, W, H), fill=TEAL)

    draw.text((72, 78), "COGNIVAC", font=font(22, True), fill=TEAL)
    draw.text((72, 200), kicker.upper(), font=font(20, True), fill=MUTED)

    # Wrap title to two lines if needed
    words = title.split()
    lines: list[str] = []
    current = ""
    title_font = font(54, True)
    for word in words:
        trial = f"{current} {word}".strip()
        if draw.textlength(trial, font=title_font) > 980 and current:
            lines.append(current)
            current = word
        else:
            current = trial
    if current:
        lines.append(current)

    y = 250
    for line in lines[:3]:
        draw.text((72, y), line, font=title_font, fill=CREAM)
        y += 68

    draw.text((72, 540), "cognivac.com", font=font(22), fill=MUTED)

    dest = Path("public/images/og-default.png") if slug == "default" else OUT / f"{slug}.png"
    img.save(dest, "PNG", optimize=True)
    print("wrote", dest)


def main() -> None:
    for slug, kicker, title in PAGES:
        paint(slug, kicker, title)


if __name__ == "__main__":
    main()
