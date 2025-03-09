#2025-03-09 09:20:27
import os 
import random 
import time 
import requests 
import hashlib 
def calculate_md5(OOOO000OOO0000OO0):
 OO0OOOO000OOO0O0O=hashlib.md5()
 OO0OOOO000OOO0O0O.update(OOOO000OOO0000OO0.encode('utf-8'))
 OOO0O0O0O0O0OOO00=OO0OOOO000OOO0O0O.hexdigest()
 return OOO0O0O0O0O0OOO00 
def question(OO0OOO000000O00O0):
 OO0OOOO0O0OOO0000=calculate_md5(f'a=wxapp&c=entry&do=question&dopost=choose&from=wxapp&i=345&istrue=1&m=skai_tooli&t=0&userid={OO0OOO000000O00O0}&v=1.0undefined')
 OOOOO0O0O0O0O00O0={"Accept":"*/*","Accept-Encoding":"gzip, deflate, br","Accept-Language":"zh-CN,zh;q=0.9","Connection":"keep-alive","Content-Type":"application/x-www-form-urlencoded","Host":"datiguoguan.928.sale","Referer":"https://servicewechat.com/wx2d758b16d4b06d39/2/page-frame.html","Sec-Fetch-Dest":"empty","Sec-Fetch-Mode":"cors","Sec-Fetch-Site":"cross-site","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 MicroMessenger/7.0.20.1781(0x6700143B) NetType/WIFI MiniProgramEnv/Windows WindowsWechat/WMPF XWEB/8447","xweb_xhr":"1"}
 O00O00O0O000O00OO=requests.get(f"https://datiguoguan.928.sale/app/index.php?i=345&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=user&sign={OO0OOOO0O0OOO0000}&m=skai_tooli&dopost=make_sign&userid={OO0OOO000000O00O0}",headers=OOOOO0O0O0O0O00O0)
 if O00O00O0O000O00OO.status_code==200:
  O00O00O0O000O00OO=O00O00O0O000O00OO.json()
  try:
   O00OOO00O0000O000=O00O00O0O000O00OO['answernum']
   print("签到成功")
   print(f"共有{O00OOO00O0000O000}个答题卡")
   for OOOO00O0OOO0OO000 in range(O00OOO00O0000O000):
    print(f"第{OOOO00O0OOO0OO000 + 1}次答题")
    O000OO00000OO0O00=requests.get(f"https://datiguoguan.928.sale/app/index.php?i=345&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=question&sign={OO0OOOO0O0OOO0000}&m=skai_tooli&dopost=choose&userid={OO0OOO000000O00O0}&istrue=1",headers=OOOOO0O0O0O0O00O0)
    if O000OO00000OO0O00.status_code==200:
     O000000O000OOOOO0=O000OO00000OO0O00.json()
     print(f"本次获得:{O000000O000OOOOO0['addmoney']}, 总共{O000000O000OOOOO0['money']}")
     print("随机延迟..")
     print("="*13)
     time.sleep(random.uniform(3,10))
    else:
     print(O000OO00000OO0O00.text)
  except:
   for OOOO00O0OOO0OO000 in range(10):
    print(f"第{OOOO00O0OOO0OO000 + 1}次答题")
    O000OO00000OO0O00=requests.get(f"https://datiguoguan.928.sale/app/index.php?i=345&t=0&v=1.0&from=wxapp&c=entry&a=wxapp&do=question&sign={OO0OOOO0O0OOO0000}&m=skai_tooli&dopost=choose&userid={OO0OOO000000O00O0}&istrue=1",headers=OOOOO0O0O0O0O00O0)
    if O000OO00000OO0O00.status_code==200:
     O000000O000OOOOO0=O000OO00000OO0O00.json()
     print(f"本次获得:{O000000O000OOOOO0['addmoney']}, 总共{O000000O000OOOOO0['money']}")
     print("随机延迟..")
     print("="*13)
     time.sleep(random.uniform(3,10))
    else:
     print(O000OO00000OO0O00.text)
def print_ascii_art():
 print("// ┏┓   ┏┓")
 print("// ┏┛┻━━━┛┻┓")
 print("// ┃       ┃")
 print("// ┃   ━   ┃")
 print("// ┃ ┳┛ ┗┳ ┃")
 print("// ┃       ┃")
 print("// ┃   ┻   ┃")
 print("// ┃       ┃")
 print("// ┗━┓   ┏━┛")
 print("// ┃   ┃ 吹水群：")
 print("// ┃   ┃ 826307062")
 print("// ┃   ┗━━━┓")
 print("// ┃       ┣┓")
 print("// ┃       ┏┛")
 print("// ┗┓┓┏━┳┓┏┛")
 print("// ┃┫┫ ┃┫┫")
 print("// ┗┻┛ ┗┻┛")
if __name__=="__main__":
 print_ascii_art()
 userid=os.environ.get("wdsh")
 if userid:
  if "&"in userid:
   userid=userid.split("&")
  else:
   userid=userid.split("\n")
  print(f"共{len(userid)}个账号")
  for i,item in enumerate(userid):
   print(f"第{i+1}个账号")
   print("="*13)
   question(item)
 else:
  print("不存在变量")
