import json
for f in ['questions_a','questions_b','questions_c','questions_d']:
    data = json.load(open(f+'.json',encoding='utf-8'))
    for ch in data['chapters']:
        n = ch['number']
        for diff in ['easy','medium','hard']:
            for i,q in enumerate(ch['questions'][diff]):
                print(f"CH{n:02d} {diff[0].upper()}{i+1}: {q['q'][:90]}")
