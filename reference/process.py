# python
import re
import os
import sys

def sanitize_filename(name):
    # 移除或替换文件名中不安全的字符
    return re.sub(r'[<>:"/\\|?*\x00-\x1f]', '_', name)

def unique_path(path):
    base, ext = os.path.splitext(path)
    i = 1
    candidate = path
    while os.path.exists(candidate):
        candidate = f"{base}_{i}{ext}"
        i += 1
    return candidate

def split_js(input_path, out_dir=None):
    if out_dir is None:
        out_dir = os.path.dirname(os.path.abspath(input_path)) or '.'
    os.makedirs(out_dir, exist_ok=True)

    with open(input_path, 'r', encoding='utf-8') as f:
        text = f.read()

    # 以两个或以上连续换行分段（兼容 CRLF / LF）
    parts = re.split(r'(?:\r?\n){2,}', text)
    parts = [p for p in parts if p.strip()]  # 去掉纯空段

    for idx, part in enumerate(parts, start=1):
        filename = None

        # 尝试找到第一个 _RF.push(...) 并提取其内部的双引号字符串列表，取第三个作为文件名
        m = re.search(r'_RF\.push\(\s*([^\)]*?)\)', part, re.S)
        if m:
            args_text = m.group(1)
            args_text_split = args_text.split(',')
            if len(args_text_split) >= 3:
                args_text = args_text_split[2]
                print(args_text)
                quotes = re.findall(r'"([^"]+)"', args_text)
                if len(quotes) >= 1:
                    filename = sanitize_filename(quotes[0]) + '.js'

        if not filename:
            filename = f'part_{idx}.js'

        out_path = os.path.join(out_dir, filename)
        out_path = unique_path(out_path)

        with open(out_path, 'w', encoding='utf-8') as out_f:
            out_f.write(part.strip() + '\n')

        print(f'Wrote: {out_path}')

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: python split_js.py input.js [out_dir]')
        sys.exit(1)
    input_file = sys.argv[1]
    out_directory = sys.argv[2] if len(sys.argv) > 2 else None
    split_js(input_file, out_directory)
