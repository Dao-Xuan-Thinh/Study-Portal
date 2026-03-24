"""Generate search-index.js — extracts text content from all 65 chapter HTML files."""
import os, glob, re, json

root = r"D:\Administrator\Desktop\STUDY\Self Study\Project\Complete_Study"
dirs = [("CEA/COA", "CEA/COA"), ("CSI/CH", "CSI/CH"), ("MAE/ALG", "MAE/ALG"),
        ("MAE/CAL1", "MAE/CAL1"), ("MAE/CAL2", "MAE/CAL2")]

def extract_text(html):
    # Remove script and style blocks entirely
    html = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.DOTALL|re.IGNORECASE)
    html = re.sub(r'<style[^>]*>.*?</style>', ' ', html, flags=re.DOTALL|re.IGNORECASE)
    # Remove HTML tags
    html = re.sub(r'<[^>]+>', ' ', html)
    # Decode common HTML entities
    for ent, char in [('&amp;','&'),('&lt;','<'),('&gt;','>'),('&quot;','"'),
                      ('&nbsp;',' '),('&#39;',"'"),('&mdash;','—'),('&ndash;','–'),
                      ('&hellip;','...'),('&times;','×'),('&alpha;','α'),('&beta;','β'),
                      ('&gamma;','γ'),('&delta;','δ'),('&lambda;','λ'),('&sigma;','σ'),
                      ('&mu;','μ'),('&pi;','π'),('&theta;','θ'),('&phi;','φ')]:
        html = html.replace(ent, char)
    html = re.sub(r'&#\d+;', '', html)
    # Normalize whitespace
    html = re.sub(r'\s+', ' ', html).strip()
    return html[:3000]  # first 3000 chars of meaningful text

index = {}
count = 0
for d, key_prefix in dirs:
    pattern = os.path.join(root, d.replace("/", os.sep), "*.html")
    for fpath in sorted(glob.glob(pattern)):
        fname = os.path.basename(fpath)
        key = key_prefix + "/" + fname
        with open(fpath, "r", encoding="utf-8", errors="replace") as f:
            content = f.read()
        text = extract_text(content)
        index[key] = text
        count += 1

# Write search-index.js
out_path = os.path.join(root, "search-index.js")
with open(out_path, "w", encoding="utf-8") as f:
    f.write("/* Auto-generated chapter content index — do not edit manually */\n")
    f.write("var CHAPTER_CONTENT = ")
    f.write(json.dumps(index, ensure_ascii=False, indent=None, separators=(',', ':')))
    f.write(";\n")

print(f"Generated search-index.js with {count} entries ({os.path.getsize(out_path)//1024} KB)")
