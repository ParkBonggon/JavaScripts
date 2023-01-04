//서버통신의 시작
/*HTTP - Hypertext Transfer Protocal
    client =>request => sever
    sever => response => client
    Hyertext : 전반적으로 쓰고있는 resource 들 (Hyperlink, 문서, 이미지)
    HTTP를 이용해 server에서 data를 요청해 받아올 수 있는 방법
    - AJAX : Asynchronous JavaScript And XML
    웹페이지에서 동적으로 server에게 data를 주고받을 수 있는 기술
    대표적인 예:
    XHR(Object)
    XMLHttpRequest 
    간단하게 서버에게 데이터를 요청하고 받아올 수 있음
    XML : 불필요한 태그들이 너무 많이 들어가 파일의 사이즈가 커지고 가독성이 좋지않아 사용이 줄어드는 추세
    
    요즘은JSON을 많이 쓰는편
    JSON - JavaScript Object Notation
    Object {key : value}
    -simplest data interchange format / 데이터를 주고 받을 때 쓸 수  있는 가장 간단한 파일 포멧
    -lightweight text-based structure / 텍스트를 기반으로 가벼움
    -easy to read / 사람 눈으로 읽기 편함
    -key-value pairs / 키와 밸류로 이루어진 파일 포멧
    -used for serialization and trasmission of data between / 데이터를 보통은 서버와 주고 받을 때 serialization위해 데이터를 전송할 떄 씀
     the netwrok the network connection
    -independent programming language and platform / ** 프로그래밍 랭귀지나 플랫폼에 상관없이 사용 가능하다.
    
    Object => serialize => String(JSON)
    String(JSON) => deserialize => Object

    */

    //JSON
    //JavaScript Object Notation

    //1. Object to JSON
    //stringify(obj)
    let json = JSON.stringify(true);
    console.log(json);

    json = JSON.stringify(['bonggon', 'main']);
    console.log(json);

    const David = {
        name: 'David',
        gender: 'male',
        tall: '180cm',
        birthDate: new Date(),
        // symbol: Symbol("id"), symbol같은 JS내 특별한 data도 JSON에 포함되지 않음
        cibersychosis: () => { 
            console.log(`${name} is Human`);
        },
    }; //함수는 ojbect 내에 있는 data가 아니기에 json에 포함되지 않음

    json = JSON.stringify(David);
    console.log(json);

    json = JSON.stringify(David,["name"]); //원하는 프로퍼티만 정의하면 선택해서 가능
    console.log(json);

    json = JSON.stringify(David,(key, value) => { //세밀하게 통제시 콜백함수를 통해 정의 가능
        console.log(`key: ${key}, value: ${value}`);
        return key === 'name' ? 'main' : value;
    }); 
    console.log(json);

    //2. JSON to Object
    //parse(json)
    json = JSON.stringify(David);
    const obj = JSON.parse(json,(key, value) => {
        console.log(`key: ${key}, value: ${value}`);
        return key === 'birthDate' ? new Date(value) : value;

    });
    console.log(obj);

    console.log(David.birthDate.getDate());
    console.log(obj.birthDate);

    //Q1. 객체를 JSON으로 바꾼 후 다시 객체로 바꾸기
    const user = {
        name: "John Smith",
        age: 35
      };
    
    //my answer
    {
    human = JSON.stringify(user);
    console.log(human);

    const parse = JSON.parse(human);
    console.log(parse);
    }
    //해답
    const user2 = JSON.parse(JSON.stringify(user));
