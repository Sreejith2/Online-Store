from flask import Flask,render_template
import shirt
shirt_src=shirt.dress_src
shirt_name=shirt.names
price_s=shirt.price_s

app=Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Onakkodi')
def onakkodi():
    return render_template('Onakkodi.html',src=shirt_src[1], name=shirt_name[1],p=price_s[1],src1=shirt_src[2],name1=shirt_name[2],p1=price_s[2],src2=shirt_src[3],p2=price_s[3],name2=shirt_name[3],src3=shirt_src[5], name3=shirt_name[5],p3=price_s[5],src4=shirt_src[6], name4=shirt_name[6],p4=price_s[6],src5=shirt_src[7], name5=shirt_name[7],p5=price_s[7])


if __name__=='__main__':
    app.run(debug=True)