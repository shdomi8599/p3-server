module.exports = [
    {
        "차량차단기": [
            {
                id: "차량차단기(MDS - 100)",
                outline: "차량차단기는 출입통제를 위한 목적으로 진입로에 설치되며, 주차권 발행기 및 요금계산기등과 함께 연동시켜 설치 할 수 있습니다. 바(BAR)는 직선(원형/사각) 또는 굴절형이 있으며, 차량 차단기는 정전시 수동으로 OPEN/CLOSE가 가능합니다.",
                characteristic: ["주차권 발행기 및 요금계산기등과 연동", "특수제작된 알루미늄 바(BAR)", "차량 충돌 위험시 리바운딩 기능 보유", "무선 리모콘 수신기 내장 가능", "비상시 수동으로 개방 가능", "양방향 판별기능 내장(2채널 검지기)", "차단바에 고휘도 반사 시트지 부착"],
                specification: ["공급전원: AC220V", "사용전력 : 상시 2W/ 동작시 60W", "동작속도: 약 2sec", "구동방식: 모터감속기 구동", "재질: Steel / 분체도장 / 방수구조", "사용환경 : 온도 -30 ~ +60℃, 습도 90%이하", "모터: BLDC Motor"],
                optional: ["Loop coil 연동설치(자동 Open / Close)", "원형/사각형바/굴절형바 (3M ~ 6M)", "리모콘, RF Reader, 주차권발행기, LPR 연동설치"],
                img: "http://localhost:3001/uploads/상품목록/차단기원형바.jpg"
            }
        ]
    },
    {
        "리모콘": [
            {
                id: "리모콘방식",
                outline: "리모콘을 소지한 정기권 차량이 인식 범위내에서 송신기의 버튼을 누르면 리모콘 수신기에서 데이터를 받아 차단기를 열리게 하는 방식으로 외부차량의 통제가 가능하며, 무인주차관리가 가능한 시스템 입니다.",
                characteristic: ["인식거리가 길고 설치비용이 저렴", "리모콘 수신기에 입력이 되지 않으면 사용불가", "두개의 출력으로 차량 차단기의 Open / Close 가능", "동일한 ID를 부여하는 방식으로 위조가 불가능", "루프코일과 연동시 무인관리 가능"],
                specification: ["사용전원 : DC 12V / 1.5A", "사용온도 : -30℃~70°C", "사용주파수: 303Mhz", "인식거리 : 약 10m"],
                img: "http://localhost:3001/uploads/상품목록/리모콘송수신기.png"
            },
        ]
    },
    {
        "RF카드": [
            {
                id: "LONG RANGE RF - READER(MDS - 901)",
                outline: "차량에 부착된 RF TAG와 한조가 되어 작동되는 설비로 차량 내부에 부착된 카드가 RF READER 영역에 진입하면 자동으로 차단기를 OPEN하여 주는 방식입니다. 본 제품은 이동체에 대하여 인식이 가능하며, TAG는 외부전원이 필요하지 않음으로 반영구적 사용이 가능합니다.",
                characteristic: ["사용전원: DC24V", "주파수출력 : 1W", "사용환경 : 옥내 / 옥외(방수형)", "인식거리 : 4 ~ 6m", "내장메모리 : 약 10,000 TAG Data", "Non - Stop Free Pass 입,출차 가능"],
                specification: ["인식시간 : 초당 50 100 TAGS", "사용온도 : -30℃~70℃", "사용습도: 95%이하", "TAG사양 : 무전원(Beam Powered), PET card, 아크릴 홀더"],
                img: "http://localhost:3001/uploads/상품목록/LONGRANGERF.PNG"
            },
            {
                id: "RF CONTROLLER(카드등록삭제기)",
                outline: "RF CONTROLLER READER 및 관리용 PC에 탑재된 각종 RF - TAG ID정보를 PC없이 손쉽게 조작가능하게 하는 제품입니다. 정기권 차량의 이사, 분실등으로 RF-TAG 재발급 및 등록삭제시 편리하게 사용 가능합니다.",
                img: "http://localhost:3001/uploads/상품목록/카드등록삭제기.PNG"
            },
            {
                id: "근접식 RF READER(MDS-902)",
                outline: "근접식 RF CARD READER는 정기권 차량만 통과시키는 기기로, 불필요한 외부차량의 출입을 통제함으로 협소한 주차장의 이용을 극대화 시킬 수 있습니다. 안테나와 READER MODULE이 일체형으로 제작되어 불안정한 READER RANGE의 단점을 보완한 제품입니다.",
                specification: ["사용전원 : AC220V, 50~60Hz", "처리속도: 1~2sec", "Reader에 카드 접촉시 차량게이트 자동 Open", "방수형, 외함 스테인레스 스틸", "인식거리 : 20cm이내", "카드내부 데이터복제 불가"],
                img: "http://localhost:3001/uploads/상품목록/근접식RF.PNG"
            }
        ]
    },
    {
        "주차권발행": [
            {
                id: "바코드 발행기(MDS-201)",
                outline: "바코드 발행기는 차량 진입을 자동 감지하여 주차권을 발행하며, 주차권 용지에 입차시간과 해당 바코드를 프린트 하는 기기입니다. 차량입차시 발행기 전면에 매설된 LOOP COIL을 밟으면 음성안내 멘트가 나오며, 주차권을 뽑으면 자동으로 차량차단기가 OPEN됩니다.",
                characteristic: ["주차관리에 따른 기본 문구 인쇄가능", "2초 이내의 빠른 발행 속도", "핸드형 스캐너를 이용한 편리한 요금정산", "출력접점을 이용하여 주차권 발행시 차단기 자동 Open", "정기권 차량 진입시 해당 차량 발행정지(RF, LPR 연동)", "동작방식 : 자동발권/수동발권"],
                specification: ["전원: AC 220V, 50~60Hz", "소비전력 : 정지시 100W, 동작시 200W~600W(히터 사용시)", "외함: Steel 1.6T / 자립방수형/분체도장", "주차권 : 감열지, 120mm x 58mm", "사용환경 : -20 ~ 50℃, 습도 10 ~ 85%이하"],
                img: "http://localhost:3001/uploads/상품목록/바코드발행기.PNG"
            },
            {
                id: "마그네틱 발행기(MDS-202)",
                outline: "마그네틱 발행기는 주차장 입구에 설치하며, 차량이 기기 전면에 도달하면 바닥에 매설된 LOOP COIL에 의하여 차량을 인식하여 주차권을 발행하는 기기입니다. 주차권에는 번호, 입차시간, 년월일등이 프린트 되며, 주차권을 뽑으면 자동으로 차량차단기가 OPEN됩니다.",
                characteristic: ["주차권에 날짜/시간등 입차정보를 마그네틱에 기록", "2초 이내의 빠른 발행 속도", "출력접점을 이용하여 주차권 발행시 차단기 자동 Open", "정기권 차량 진입시 해당 차량 발행정지(RF, LPR 연동)", "동작방식: 자동발권/수동발권"],
                specification: ["전원: AC 220V, 50~60Hz", "소비전력 : 정지시 100W, 동작시 200W ~ 600W(히터 사용시)", "외함: Steel 1.6T / 자립방수형/분체도장", "주차권 : 마그네틱 종이 주차권, 86mm x 54mm", "사용환경 : -20 ~ 50℃, 습도 10 ~ 85%이하"],
                img: "http://localhost:3001/uploads/상품목록/마그네틱발행기.PNG"
            }
        ]
    },
    {
        "차량번호인식": [
            {
                id: "차량번호인식기(LPR, MDS-300)",
                outline: "첨단 영상기술을 이용하여 차량의 번호 영상을 데이터화 하고 차량의 입차시와 출차시의 번호영상 데이터를 비교하여 모든 차량의 입,출차 영상, 시간등의 관련 데이터 조회가 가능하므로 증거 자료로 활용할 수 있으며, 특히 지정 차량만의 출입을 원할 경우 미리 차량 번호를 등록하여 등록된 차량 이외에는 자동으로 출입을 통제함으로써 보안을 포함한 다각적 기능을 갖춘 시스템입니다.",
                characteristic: ["인식률: 98%이상", "색상: 컬러 출력", "인식속도: 0.02초", "실시간 모니터링 가능", "차량번호를 이용한 정기차량 관리", "RF시스템과 연동하여 사용가능", "이미지 정보 저장 및 검색가능", "번호판 변경시 호환유지"],
                specification: ["사용전원: AC 220V, 50~60Hz", "소비전력 : 300W이내", "사용온도 : -30 ~ +60°C", "조명: 적외선 스트로브 or LED, 할로겐", "외함재질 : Steel 1.6T, 분체도장"],
                img: "http://localhost:3001/uploads/상품목록/차량번호인식기.PNG"
            },
        ]
    },
    {
        "요금계산기": [
            {
                id: "일반형 요금계산기(MDS-501)",
                outline: "일반형 요금계산기는 입차시 발급받은 주차권을 제시하면 차량번호 입력 또는 바코드 주차권을 스캐너로 코딩하면 자동으로 요금을 계산하는 기기입니다. 요금계산기 자체적으로 주차권을 발행 할 수 있는 기능을 보유하고 있으며, 차량차단기와 연동되어 요금 정산시 자동으로 차단기를 OPEN시킬 수 있습니다.",
                characteristic: ["누구나 편리하게 사용 할 수 있는 최적의 프로그램", "바코드형 발행기와 연동하여 스캐너로 요금정산 가능", "다양한 할인, 서비스 기능(무료, %할인, 금액할인등)", "시간별/ 일별/ 월간 정산보고서 출력 가능", "주차권 발행시 차량번호 입력 가능", "요금 정산 후 자동으로 차단기 열림"],
                specification: ["전원: AC 220V, 50~60Hz", "소비전력 : 20W ~ 55W(최대)", "사용환경 : 온도 0 ~45℃, 습도 90%이하", "프린터: 감열 프린터", "용지: 57mm x 70mm", "구성: 프린터, 본체(키보드), 돈통"],
                img: "http://localhost:3001/uploads/상품목록/일반형요금계산기.PNG"
            },
            {
                id: "PC형 요금계산기(MDS-502)",
                outline: "PC형 요금계산기는 입차시 발급받은 주차권을 제시하면 주차요금을 신속하게 자동으로 계산하는 기기입니다. 주차권 발행기/RF 시스템/차량차단기등 각종 주변기기와 연동이 자유로우며, 자체적으로 DATA BASE를 보유 할 수 있습니다.",
                characteristic: ["시간할인 / 금액할인 / %할인등 현장별 할인기능 등록 가능", "정기권 차량의 등록 및 삭제, 입출차 내역 관리가능", "각종 정산보고서 출력 가능", "심야 요금체계 설정 가능", "중앙 HOST 컴퓨터와 ON-LINE통신 가능", "차단기와 연동하여 주차권, 영수증 프린트 완료 시 자동 Open"],
                specification: ["전원: AC 220V, 50~60Hz", "소비전력 : 20W ~ 55W(최대)", "사용환경 : 온도 0~ 45℃,습도 90%이하", "프린터 : 도트 또는 써멀", "정전보상: 60일", "구성: PC, 스캐너, 프린터, 주차권 리더기, 돈통"],
                img: "http://localhost:3001/uploads/상품목록/PC형요금계산기.PNG"
            }
        ]
    },
    {
        "주차부스": [
            {
                id: "주차부스",
                img: ['100013.jpg', '100014.jpg', '100016.jpg', '100018.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '14.jpg', '100000.jpg', '100001.jpg', '100002.jpg', '100009.jpg',]
            }
        ]
    },
    {
        "신호관제": [
            {
                id: "입차경광등",
                outline: "주차장내로 차량이 진입하면 장내에 있는 차량 및 사람의 안전을 위하여 설치하는 신호장치입니다. 차량검지기에 의해 자동으로 경보음 및 경보신호를 경광등에 전달하여 사고방지 및 원활한 차량소통을 도와 줍니다.",
                specification: ["전원: AC 220V, 60Hz", "소비전력 : 작동시 40W", "내장품 : 회전 신호용 전구, Buzzer", "경보타이머 : 1 ~ 60sec(검지기 출력 조정)", "외형재질 : Stainless Steel 1.0T", "설치유형: 천정형, 벽부형, 자립형(별도주문)"],
                img: "http://localhost:3001/uploads/상품목록/입차경광등.PNG"
            },
            {
                id: "출차주의등",
                outline: "주차장 내에서 차량이 외부로 나올때 지상부분의 차량과 보행자에게 경보음 및 경보신호를 알려주어 사고방지 및 차량의 원활한 소통을 도와주는 신호장치입니다. 차량검지기에 의하여 자동으로 경보음과 경보신호를 알려주어 주차요원이 없어도 관리 가능합니다.",
                specification: ["전원: AC 220V, 60Hz", "소비전력: 작동시 120W", "내장품 : 백열전구 2개, Buzzer", "경보타이머:1 ~ 60sec(검지기 출력 조정)", "외형재질 : Stainless Steel 1.2T", "설치유형: 자립형, 벽부형"],
                img: "http://localhost:3001/uploads/상품목록/출차경광등.PNG"
            },
            {
                id: "차량검지기",
                outline: "차량이 주차장내에 진입하면 바닥에 매설된 LOOP COIL의 신호를 감지하여 연결된 주변장치들과 연동시키는 기기입니다. LOOP COIL과 1대1로 감지 할 수 있는 1회로 검지기와 사용자의 필요에 따라 별도의 검지부 구성 또는, 방향판별을 감지하는 2회로 검지기로 구분됩니다.",
                characteristic: ["감지방식 : 차량이 통과하면 Loop Coil이 변조시키는 주파수에 의해 감지", "감지능력 : 경자동차 이상 감지,현장여건에 따라 감도조정 가능", "감도조정 : 고감도에서 저감도까지 10단계로 구성", "타이머 : 1 ~ 60초 임의로 조정 가능", "리셋기능: 오동작 발생시 Auto Reset", "방향판별 기능: 차량이 진입하는 방향을 알 수 있는 기능", "릴레이 기능:Loop Coil통과 후 2초뒤 신호를 보내는 기능"],
                specification: ["전원 : AC 220V, 50~60Hz", "소비전력 : 상시 2W, 작동시 25W", "사용환경 : 온도 -20℃ ~ +50℃, 습도 30% ~ 85%", "외함재질: ABS / Steel", "설치유형: 매립형 / 노출형"],
                img: "http://localhost:3001/uploads/상품목록/차량검지기.PNG"
            },
            {
                id: "차량유도등",
                outline: "주차장 내부의 입구 또는 출구에 주차유도 안내표시를 하여 안전운행과 원활한 차량 소통을 도와주는 안내 신호장치입니다. 운전자의 주차편의 및 충돌사고를 미연에 방지 할 수 있습니다.",
                specification: ["전원: AC 220V, 60Hz", "소비전력: 상시 32W", "구조: 단면, 양면 표지형", "표시부 : 전면판 청색바탕, 백색글씨", "외형재질: AL 1.0T", "설치유형: 천정형", "설치높이 : 천정고 2,300mm이상"],
                img: "http://localhost:3001/uploads/상품목록/차량유도등.PNG"
            }
        ]
    }
]