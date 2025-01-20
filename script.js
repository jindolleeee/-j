document.addEventListener("DOMContentLoaded", function() {
    // 리스트 항목과 각 항목에 대한 이미지, 비디오, 텍스트, 제목 매핑
    const contentMap = {
        "이중전": {
            imageUrl: "images/double.jpg",
            videoUrl: "images/movie.mp4",
            text: `이중적인 나를 위한 프로젝트 '이중전'
            
            사람들은 저마다 다른얼굴을 가지고 있다.
            누구를 만나고 어디에 있고 무엇을 하는지에 따라
            행동하고 생각하는 것이 다르다.
            
            이런 ’나‘를 사람들은 ’이중적인 사람‘이다.라고 정의하지만
            이분법적 사고로 ’나‘를 설명할 수 없다.
            
            이중전의 이중적 '중'은 '무거울 중'이 아닌 '가운데 중'의 의미다.
            '가운데 중'은 이분법적인 사고(흑백논리)로 설명할 수 없는 이도 저도 아닌 가운데 서있는 '나'를 나타낸다.

            화면가운데 원은 '이진돌' 본인인 '나'를 나타내며
            그 주위로 타인이 바라본 '나'에 대한 단어들이 반복되어 공전한다.

            중심에 위치한 '나'를 나타나기 위해 center를 기점으로 초록색 선과 원이 반짝 등장한다.
            이는 각 0,90,180,270,360도에 반응하며 화면을 보는 관객은 진짜 '나' 자신을 찾는 것에 어려움을 느낀다.

            위 이미지는 작품에 대한 포스터와 전시장 목업 예시이다.
            

            Project “Double War” for the Duality of Myself

            People have different faces depending on whom they meet, where they are, and what they are doing. Their actions and thoughts vary accordingly.

            While some might define such a ‘self’ as a ‘dual person,’ this duality cannot be explained by binary thinking.

            In "Double War," the concept of 'double' does not mean 'heavy' but rather 'center.' The 'center' represents a state of being neither one nor the other, which cannot be explained by dichotomous thinking.

            This project includes posters and exhibition mockups about the work.`,

            title: "이중적인 나를 위한 전시 이중전" // 팝업 타이틀 
        },
        
        "248": {
            imageUrl: "images/248.jpg",
            videoUrl: "",   // 비디오 URL이 없는 경우
            text: `248 = 관계적 허용
            
            ‘24팔’은 내가 정의하고자 하는 관계적 허용의 개념을 상징한다.
            숫자 ‘24’는 24시간 운영되는 편의점이나 스터디 카페처럼 시간의 흐름을 나타내고, 물리적 이동인 ‘이사’의 의미를 담을 수도 있다.
            그러나 ‘24팔’이라는 발음 속에는 2 * 4 = 8이라는 관계적 표현이 숨겨져 있다.

            여기서 ‘팔’은 단순한 숫자가 아닌, 인체의 일부로서 독립된 언어적 역할을 한다.
            이러한 관계는 문자와 문자, 사물과 사물이 서로 다르게 보이지만, 그 조합이 모여 하나의 전체적 의미를 구성한다.

            관계적 우주론에 따르면, 우주는 고정된 실체가 아닌, 오직 관계 속에서만 의미를 갖는다.
            나와 너의 관계도 그러하다. 내가 있기에 네가 존재하고, 네가 있기에 내가 존재한다."
            
            248 = Relational Permission

            ‘24-pal’ symbolizes the concept of relational permission that I aim to define.
            The number ‘24’ represents the passage of time, much like 24-hour convenience stores or study cafés, and can also carry the meaning of physical relocation, as in “moving” (이사).
            However, hidden within the pronunciation of ‘24-pal’ is the relational expression 2 * 4 = 8.

            Here, ‘pal’ is not merely a number but serves an independent linguistic role as part of the human body (arm).
            This relationship demonstrates that while letters and objects may appear distinct from one another, their combinations come together to form a holistic meaning.

            According to relational cosmology, the universe is not a fixed entity but finds meaning only within relationships.
            The same applies to the relationship between you and me: I exist because you exist, and you exist because I exist.`
            
            ,
            
            title: "248"
        },

        "이코이_해커톤": {
            imageUrl: "images/ecoee.jpg",
            videoUrl: "", // 비디오 URL이 없는 경우
            text: `이코이 ESG경영 ECO의 새로운 시각
            
            리사이클링은 글로벌 문제를 해결하는 데 큰 도움이 됩니다. "Re"는 '다시'라는 의미를 담고 있기 때문에, 저는 다른 측면에서도 다시 도움을 주고자 합니다.

            많은 기업들이 기부활동을 통해 사람들을 돕고 있습니다.
            하지만 많은 직원들은 이러한 활동이 무엇인지 잘 모르며 귀찮은 일이라 생각합니다.

            우리의 리사이클링 앱은 직원과 고용주가 함께 참여하고
            함께 기부하는 것을 목표로,
            함께하는 것이야 말로 강력한 힘을 발휘합니다.

            이 앱은 기업 내에서 리사이클링을 촉진할 뿐만 아니라 회사내에 참여하고 있는 기부처(활동)에게도 좋은 영향을 줍니다.             

            Project “Double War” for the Duality of Myself

            People have different faces depending on whom they meet, where they are, and what they are doing. Their actions and thoughts vary accordingly.

            While some might define such a ‘self’ as a ‘dual person,’ this duality cannot be explained by binary thinking.

            In "Double War," the concept of 'double' does not mean 'heavy' but rather 'center.' The 'center' represents a state of being neither one nor the other, which cannot be explained by dichotomous thinking.

            This project includes posters and exhibition mockups about the work.`,

            title: "이코이 ESG경영 ECO의 새로운 시각"
        },
        "케어레이트": {
            imageUrl: "images/carerate.jpg",
            videoUrl: "images/carerate.mp4", // 비디오 URL이 없는 경우
            text: `내 손안의 관리자 케어 시스템 케어레이트
            
            케어레이트는 노인 인구가 증가하는 현실에 대비하여 부족한 고급 인력 병원 간호사, 의사 등 관리자를 위해
            24시간 환자를 케어할 수 있는 시스템이다.

            해당 기기를 부착해 환자의 수면 시간부터 호흡, 심박, 낙상까지 현장에서 미쳐 발견하지 못한 것들을 알림과 함께
            전달된다.
            BI 네이밍부터 로고 디자인까지 어플리케이션에 필요한 기능과 기획을 진행하고 UI 화면을 구성한 내용이다.

            Carerate: A Personal Care Management System in Your Hands

            CareRate is a system designed to address the growing elderly population by providing 24-hour
            patient care for managers such as doctors and nurses, where skilled personnel are in short supply.

            By attaching the device, it tracks and reports crucial data such as sleep duration, breathing, heart
            rate, and falls, alerting caregivers to issues that may have gone unnoticed in real-time.

            This is a project that includes everything from naming the brand and designing the logo to
            planning and developing the app’s features, as well as creating the UI screens.`,
            
            title: "케어레이트"
        }
    };

    // 리스트 항목들에 클릭 이벤트 추가
    const listItems = document.querySelectorAll("ul li");
    listItems.forEach(function(item) {
        item.addEventListener("click", function() {
            const itemText = item.textContent.trim();
            const content = contentMap[itemText];

            if (content) {
                // 팝업 창 열기
                const popup = window.open("", "_blank", "width=800,height=900");

                // HTML 문서 내용 작성
                popup.document.write(`
                    <html>
                        <head>
                            <title>${content.title}</title>
                            <style>
                                body {
                                    font-family:'Nanum Gothic Coding', monospace;
                                    line-height: 1.6;
                                    margin: 20px;
                                }
                                h3 {
                                    font-size: 24px;
                                    font-weight: 400;
                                }
                                p {
                                    font-size: 16px;
                                }
                            </style>
                        </head>
                        <body>
                            <h3></h3>
                            <img src="${content.imageUrl}" alt="${itemText} 이미지" style="width:100%;height:auto;">
                            ${content.videoUrl ? `
                                <video controls style="width:100%;height:auto;">
                                    <source src="${content.videoUrl}" type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            ` : ''}
                            <p>${content.text.replace(/\n/g, '<br>')}</p>
                        </body>
                    </html>
                `);
                popup.document.close();
            }
        });
    });
});
