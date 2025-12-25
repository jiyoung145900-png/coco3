document.addEventListener("DOMContentLoaded", () => {
    
    // 1. PNG 다운로드 로직
    const downloadButton = document.getElementById("downloadPngButton");
    const captureArea = document.getElementById("capture-area");

    if (downloadButton && captureArea) {
        downloadButton.addEventListener('click', () => {
            downloadButton.style.display = 'none';
            const panel = document.querySelector('.color-panel');
            if(panel) panel.style.display = 'none';
            
            html2canvas(captureArea, {
                width: 1032,
                backgroundColor: null // 투명 배경 유지
            }).then(canvas => {
                downloadButton.style.display = 'block';
                if(panel) panel.style.display = 'flex';

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

    // 2. 헬퍼 함수 정의
    function setVar(name, value) {
        document.documentElement.style.setProperty(name, value);
    }
    
    function saveSetting(key, value) {
        if (value) localStorage.setItem(key, value);
    }

    function loadSettings() {
        const settings = {
            '--table-header-bg': "headerBgColor", '--table-header-text': "headerTextColor", 
            '--table-row-bg': "rowBgColor", '--table-row-text': "rowTextColor",
            '--col-num-text-color': "colNumTextColor", '--col-num-bg-color': "colNumBgColor", 
            '--col-select-text-color': "colSelectTextColor", '--col-select-bg-color': "colSelectBgColor", 
            '--col-service-color': "colServiceColor",
        };

        for (const cssVar in settings) {
            const inputId = settings[cssVar];
            const storedValue = localStorage.getItem(inputId);
            const inputElement = document.getElementById(inputId);
            if (storedValue) {
                setVar(cssVar, storedValue);
                if (inputElement && storedValue !== 'transparent') {
                    inputElement.value = storedValue;
                }
            }
        }
        
        const titleElement = document.querySelector(".title");
        const storedTitle = localStorage.getItem("titleSetting");
        if (storedTitle && titleElement) {
            titleElement.textContent = storedTitle;
            const titleInput = document.getElementById("titleInput");
            if (titleInput) titleInput.value = storedTitle;
        }
    }
    
    loadSettings();

    // 3. 변수 및 이벤트 리스너 설정
    const headerBg = document.getElementById("headerBgColor");
    const headerText = document.getElementById("headerTextColor");
    const rowBg = document.getElementById("rowBgColor");
    const rowText = document.getElementById("rowTextColor");
    const colNumText = document.getElementById("colNumTextColor");
    const colNumBg = document.getElementById("colNumBgColor");
    const colSelectText = document.getElementById("colSelectTextColor");
    const colSelectBg = document.getElementById("colSelectBgColor");
    const colService = document.getElementById("colServiceColor"); 
    const titleInput = document.getElementById("titleInput");
    const titleElement = document.querySelector(".title");
    const colorPaletteElement = document.querySelector(".color-palette");

    const presetColors = [
        'transparent', '#FF0000', '#0000FF', '#008000', '#FFFF00', '#FFA500', 
        '#800080', '#00FFFF', '#FFC0CB', '#FFFFFF', '#000000', 
        '#808080', '#A52A2A', '#00FF00', '#FFD700', '#FF4500', 
        '#9932CC', '#4682B4', '#DAA520', '#2F4F4F', '#00BFFF'
    ];

    let activeColorInput = headerBg;

    // 4. 색상 버튼(팔레트) 생성 및 로직
    presetColors.forEach(color => {
        const swatch = document.createElement('div');
        swatch.className = 'color-swatch';
        swatch.dataset.color = color;
        
        if (color === 'transparent') {
            swatch.style.backgroundColor = '#ffffff';
        } else {
            swatch.style.backgroundColor = color;
        }

        swatch.addEventListener('click', () => {
            if (activeColorInput) {
                if (color === 'transparent') {
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
                        setVar(targetVar, 'transparent');
                        saveSetting(activeColorInput.id, 'transparent');
                    }
                } else {
                    activeColorInput.value = color;
                    activeColorInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
            } else {
                alert("항목을 먼저 선택하세요!");
            }
        });
        if(colorPaletteElement) colorPaletteElement.appendChild(swatch);
    });

    // 5. 입력 필드 포커스 연결
    const colorInputs = document.querySelectorAll('.color-panel input[type="color"]');
    colorInputs.forEach(input => {
        input.addEventListener('focus', () => { activeColorInput = input; });
        input.parentElement.addEventListener('click', () => { input.focus(); });
    });

    // 6. 각 설정 실시간 반영 (저장 포함)
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

    // 왼쪽 메뉴 active 토글
    const leftItems = document.querySelectorAll(".left-item");
    leftItems.forEach(item => {
        item.addEventListener("click", () => {
            document.querySelector(".left-item.active")?.classList.remove("active");
            item.classList.add("active");
        });
    });
});
