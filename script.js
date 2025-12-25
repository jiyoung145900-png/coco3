document.addEventListener("DOMContentLoaded", () => {
    
// ----------------------------------------------------
    // 1. PNG 다운로드 로직 추가 (수정됨)
    // ----------------------------------------------------
    const downloadButton = document.getElementById("downloadPngButton");
    const captureArea = document.getElementById("capture-area"); // wrap 영역

    if (downloadButton && captureArea) {
        downloadButton.addEventListener('click', () => {
            // 다운로드 버튼과 색상 패널은 캡처에서 제외하기 위해 잠시 숨김
            downloadButton.style.display = 'none';
            document.querySelector('.color-panel').style.display = 'none'; // 컬러 패널 숨김
            
            // 캡처 영역 (.wrap 영역)을 캔버스로 변환
            html2canvas(captureArea, {
                width: 1032, // ★ 최종 수정: 캡처 너비를 1022px로 강제 지정하여 오른쪽 2px 여백 제외 ★
                // useCORS: true, 
            }).then(canvas => {
                // 캡처 후 다시 표시
                downloadButton.style.display = 'block';
                document.querySelector('.color-panel').style.display = 'flex'; // 컬러 패널 다시 표시

                // 캔버스 데이터를 이미지 URL로 변환 및 다운로드
                const imageURL = canvas.toDataURL("image/png");
                const link = document.createElement('a');
                link.download = '데이터_현황_캡처.png';
                link.href = imageURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });
    }

    // ----------------------------------------------------
    // 2. 설정 저장 및 불러오기 로직 정의
    // ----------------------------------------------------

    // 헬퍼: 안전하게 CSS 변수 설정
    function setVar(name, value) {
        document.documentElement.style.setProperty(name, value);
    }
    
    // 헬퍼: 로컬 스토리지에 설정 저장 (자동 저장)
    function saveSetting(key, value) {
        if (value) {
            localStorage.setItem(key, value);
        }
    }

    // 헬퍼: 로컬 스토리지에서 설정 불러오기 및 적용
    function loadSettings() {
        const settings = {
            '--table-header-bg': "headerBgColor", '--table-header-text': "headerTextColor", '--table-row-bg': "rowBgColor", '--table-row-text': "rowTextColor",
            '--col-num-text-color': "colNumTextColor", '--col-num-bg-color': "colNumBgColor", '--col-select-text-color': "colSelectTextColor",
            '--col-select-bg-color': "colSelectBgColor", '--col-service-color': "colServiceColor",
        };

        // 1. 색상 설정 불러오기
        for (const cssVar in settings) {
            const inputId = settings[cssVar];
            const storedValue = localStorage.getItem(inputId);
            const inputElement = document.getElementById(inputId);

            if (storedValue) {
                setVar(cssVar, storedValue);
                if (inputElement) {
                    inputElement.value = storedValue;
                }
            }
        }
        
        // 2. 제목 설정 불러오기
        const titleElement = document.querySelector(".title");
        const storedTitle = localStorage.getItem("titleSetting");
        if (storedTitle && titleElement) {
            titleElement.textContent = storedTitle;
            const titleInput = document.getElementById("titleInput");
            if (titleInput) {
                titleInput.value = storedTitle;
            }
        }
    }
    
    // 페이지 로드 시 설정 불러오기
    loadSettings();

    // ----------------------------------------------------
    // 3. 초기화 및 이벤트 리스너 설정
    // ----------------------------------------------------

    // 왼쪽 메뉴 active 토글
    const leftItems = document.querySelectorAll(".left-item");
    leftItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".left-item.active")?.classList.remove("active");
            item.classList.add("active");
        });
    });

    const headerBg = document.getElementById("headerBgColor"); const headerText = document.getElementById("headerTextColor");
    const rowBg = document.getElementById("rowBgColor"); const rowText = document.getElementById("rowTextColor");
    const colNumText = document.getElementById("colNumTextColor"); const colNumBg = document.getElementById("colNumBgColor");
    const colSelectText = document.getElementById("colSelectTextColor"); const colSelectBg = document.getElementById("colSelectBgColor");
    const colService = document.getElementById("colServiceColor"); 
    const titleInput = document.getElementById("titleInput"); const titleElement = document.querySelector(".title");
    const colorPaletteElement = document.querySelector(".color-palette");
    const presetColors = [
    'transparent', // <- 여기에 무색(투명) 기능을 넣습니다.
    '#FF0000', '#0000FF', '#008000', '#FFFF00', '#FFA500', 
    '#800080', '#00FFFF', '#FFC0CB', '#FFFFFF', '#000000', 
    '#808080', '#A52A2A', '#00FF00', '#FFD700', '#FF4500', 
    '#9932CC', '#4682B4', '#DAA520', '#2F4F4F', '#00BFFF'
];
let activeColorInput = headerBg;

   // 색상 버튼 생성 부분 수정
presetColors.forEach(color => {
    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.dataset.color = color;
    
    // 무색 버튼 디자인 (대각선 배경용)
    if (color === 'transparent') {
        swatch.style.backgroundColor = '#ffffff';
    } else {
        swatch.style.backgroundColor = color;
    }

    swatch.addEventListener('click', () => {
        if (activeColorInput) {
            if (color === 'transparent') {
                // [1] ID와 CSS 변수 맵핑
                const cssVarMap = {
                    'headerBgColor': '--table-header-bg',
                    'headerTextColor': '--table-header-text',
                    'rowBgColor': '--table-row-bg',
                    'rowTextColor': '--table-row-text',
                    'colNumTextColor': '--col-num-text-color',
                    'colNumBgColor': '--col-num-bg-color',
                    'colSelectTextColor': '--col-select-text-color',
                    'colSelectBgColor': '--col-select-bg-color',
                    'colServiceColor': '--col-service-color'
                };

                const targetVar = cssVarMap[activeColorInput.id];
                if (targetVar) {
                    // [2] 즉시 화면의 CSS 변수를 'transparent'로 변경
                    document.documentElement.style.setProperty(targetVar, 'transparent');
                    
                    // [3] 로컬 스토리지 저장 (나중에도 유지되도록)
                    saveSetting(activeColorInput.id, 'transparent');

                    // [4] 중요: input창에 글자로 '투명'이라고 표시해주거나 색상을 초기화 (선택사항)
                    // input type="color"는 투명을 표현 못하므로 시각적 피드백만 줍니다.
                    console.log(activeColorInput.id + " 항목이 투명으로 설정되었습니다.");
                }
            } else {
                // 일반 색상 처리 로직
                activeColorInput.value = color;
                const event = new Event('input', { bubbles: true });
                activeColorInput.dispatchEvent(event);
            }
        } else {
            alert("먼저 오른쪽의 색상 칸(네모 박스)을 클릭해서 선택해 주세요!");
        }
    });
    colorPaletteElement.appendChild(swatch);
    // 컬러 입력 필드 포커스
    const colorInputs = document.querySelectorAll('.color-panel input[type="color"]');
    colorInputs.forEach(input => {
        input.addEventListener('focus', () => { activeColorInput = input; });
        input.parentElement.addEventListener('click', () => { input.focus(); });
    });

    // 이벤트 리스너 설정 (저장 로직 통합)
    if (headerBg) headerBg.addEventListener("input", e => { setVar('--table-header-bg', e.target.value); saveSetting('headerBgColor', e.target.value); });
    if (headerText) headerText.addEventListener("input", e => { setVar('--table-header-text', e.target.value); saveSetting('headerTextColor', e.target.value); });
    if (rowBg) rowBg.addEventListener("input", e => { setVar('--table-row-bg', e.target.value); saveSetting('rowBgColor', e.target.value); });
    if (rowText) rowText.addEventListener("input", e => { setVar('--table-row-text', e.target.value); saveSetting('rowTextColor', e.target.value); });
    if (colNumText) colNumText.addEventListener("input", e => { setVar('--col-num-text-color', e.target.value); saveSetting('colNumTextColor', e.target.value); });
    if (colNumBg) colNumBg.addEventListener("input", e => { setVar('--col-num-bg-color', e.target.value); saveSetting('colNumBgColor', e.target.value); });
    if (colSelectText) colSelectText.addEventListener("input", e => { setVar('--col-select-text-color', e.target.value); saveSetting('colSelectTextColor', e.target.value); });
    if (colSelectBg) colSelectBg.addEventListener("input", e => { setVar('--col-select-bg-color', e.target.value); saveSetting('colSelectBgColor', e.target.value); });
    if (colService) colService.addEventListener("input", e => { setVar('--col-service-color', e.target.value); saveSetting('colServiceColor', e.target.value); });

    if (titleInput && titleElement) {
        titleInput.addEventListener("input", (e) => {
            const newTitle = e.target.value || "실시간 데이터 현황";
            titleElement.textContent = newTitle;
            saveSetting('titleSetting', newTitle);
        });
    }
});
