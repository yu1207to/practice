"use strict";


{
  // const otherProps = {
  //   r:4,
  //   color:"red",
  // };
  // const point = {
  //   x :100,
  //   y:180,
  //   ...otherProps,
  // };

  // point.x =120;

  // point.z = 70;
  // delete point.y;
  // console.log(point);

  // const  {x,r,...others} = point;
  // console.log(x);
  // console.log(r);
  // console.log(others);

  // const keys = Object.keys (point);
  // keys.forEach(key => {
  //   console.log(`key:${key} Value:${point[key]}`);
  // });

  // const points = [
  //   {x: 50, y:100},
  //   {x: 0,  y:20},
  //   {x: 12, y:27},
  // ];
  // console.log(points[1].y);

  // const d = [2020,6 ,20];
  // console.log(d.join("/"));
  // console.log(d.join(""));

  // console.log(d.split("/"));

  const t = "2020/6/20";
  console.log(t.split("/"));
  const [hour,minite,second] = t.split("/");
  console.log(hour);
  console.log(minite);
  console.log(second);

 
  const scores = [10,3,9];
    let sum = 0;

    scores.forEach(score =>{
      sum += score;
    });

    const avg = sum / scores.length;

    console.log(sum);
    console.log(avg);
    console.log(Math.floor(avg));
    console.log(Math.ceil(avg));
    console.log(Math.round(avg));
    console.log(avg.toFixed(avg));

    console.log(Math.random());

    console.log(Math.floor(Math.random()*6+1-1)+1);

    const d = new Date();
    console.log(d);

    console.log(`${d.getMonth() +1}月${d.getDate()}日`)


    // alert("hello");

    // const answer =confirm("削除しますか？");
    //   if(answer){
    //     console.log("削除しました");
    //   }else{
    //     console.log("キャンセルしました")
    //   }

    
    let i =0;
    function showTime(){
      // const intervalId = setInterval(showTime, 1000);
      const timeoutId = setTimeout(showTime, 1000);
      console.log(new Date());
      i++;
      // if(i > 4){
      //   clearInterval(intervalId);
      // }
      
      if (i>3){
        clearTimeout(timeoutId);
      }
    }
    showTime();


    const name = "6";
    try{
      console.log(name.toUpperCase());
    }catch(e){
      console.log(e);
    }
    console.log("finish");


    
    class Post{
      constructor(text){
        this.text = text;
        this.likeCount=0;
      }
      
      show(){
        console.log(`${this.text}-${this.likeCount}likes`);
      }

      like(){
        this.likeCount++;
        this.show();
      }

      static showInfo(){
        console.log("Post class class version 1.0");
      }
    }
      
    const posts=[
      new Post("JavaScriptの練習中"),
    ];
    // show(posts[0]);
    posts[0].like();
    Post.showInfo();

    //要素を追加
    // const item0 = document.querySelectorAll("li")[0];
    // const copy= item0.cloneNode(true);  要素をコピー

    // const ul = document.querySelector("ul");
    // const item2 = document.querySelectorAll("li")[2];
    // ul.insertBefore(copy, item2)   要素を挿入する場所

    //要素を削除
    // const item1 = document.querySelectorAll("li")[1];
    //item1.remove(); 
    //古いバージョンでは
    //親Nord .removeChild(削除するNord)
    //doccument.querySelector("ul").removeChild(item1); 


    // //入力値の使用
    // const li = document.createElement("li");
    // const text = document.querySelector("input");
    // li.textContent = text.value;
    // document.querySelector("ul").appendChild("li");


    //検索された物を下に追加する
    // const li = document.createElement("li");
    // const text = document.querySelector("input");
    // li.textContent = text.value;
    // document.querySelector("ul").appendChild(li);

    // text.value = "";
    // text.focus();


    //オプションで選択した物を下記に追加する
    // const li = document.createElement("li");
    // const color = document.querySelector("select");
    // li.textContent = `${color.value} - ${color.selectedIndex}`;
    // document.querySelector("ul").appendChild(li);


    //ラジオボタンを操作する
    // const colors = document.querySelectorAll("input");
    // let selectedColor;

    // colors.forEach(color => {
    //   if (color.checked === true){
    //     selectedColor = color.value;
    //   }
    // });

    // const li = document.createElement("li");
    // li.textContent = selectedColor;
    // document.querySelector("ul").appendChild(li);


    //チェックボックスの選択された物を下記にかきのこす
    // const colors = document.querySelectorAll("input");
    // const selectedColors = [];

    // colors.forEach(color =>{
    //   if (color.checked === true) {
    //     selectedColors.push(color.value);
    //   }
    // });

    // const li = document.createElement("li");
    // li.textContent = selectedColors;
    // document.querySelector("ul").appendChild(li)
  }