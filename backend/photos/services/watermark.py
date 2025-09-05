from PIL import Image, ImageDraw, ImageFont

def apply_watermark(src_path, dst_path, text="FOTOS63", opacity=120):
    img = Image.open(src_path).convert("RGBA")
    overlay = Image.new("RGBA", img.size, (255,255,255,0))
    draw = ImageDraw.Draw(overlay)
    w,h = img.size; font = ImageFont.truetype("arial.ttf", int(w*0.05))
    draw.text((int(w*0.03), int(h*0.9)), text, (255,255,255,opacity), font=font)
    Image.alpha_composite(img, overlay).convert("RGB").save(dst_path, "JPEG", quality=90)
