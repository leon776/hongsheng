var swiper2;
var wording = [
    '行业比例',
    '工业',
    '标签',
    '汽车',
    '家用电器',
    '安保',
    '无人机',
    '消耗品',
    '其他',
    '地区比例',
    '华南',
    '华中',
    '华北',
    '香港',
    '海外',
];
function initSwiper(){
    if(swiper2 == undefined){
        setTimeout(function(){
            swiper2 = new Swiper('.cus-swiper', {
                mode: 'horizontal',
                speed: 800,
                slidesPerView: 1,
                calculateHeight: true,
                paginationClickable: true,
                onlyExternal : true,
                pagination: '.cus-swiper>.swiper-pagination',
                paginationElementClass: 'hs-bullet',
                paginationActiveClass: 'hs-bullet-active',
            });
        },20)
    }
}

var option1 = {
    title : {
        text: wording[0],
        x:'center',
        y:'0',
        textStyle: {
            fontSize: '16',
            fontWeight: 'bold',
            color:'#ce2626'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        y: 'center',
        data:[wording[1],wording[2],wording[3],wording[4],wording[5],wording[6],wording[7],wording[8]]
    },
    series: [
        {
            name:wording[0],
            type:'pie',
            radius: ['50%', '70%'],
            center: ['65%', '50%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:9, name:wording[1]},
                {value:14, name:wording[2]},
                {value:5, name:wording[3]},
                {value:24, name:wording[4]},
                {value:4, name:wording[5]},
                {value:10, name:wording[6]},
                {value:5, name:wording[7]},
                {value:29, name:wording[8]},
            ]
        }
    ]
};
var option2 = {
    title : {
        text: wording[9],
        x:'center',
        y:'0',
        textStyle: {
            fontSize: '16',
            fontWeight: 'bold',
            color:'#ce2626'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
    },
    legend: {
        orient: 'vertical',
        x: 'right',
        y: 'center',
        data:[wording[10],wording[11],wording[12],wording[13],wording[14]]
    },
    series: [
        {
            name:wording[9],
            type:'pie',
            radius: ['50%', '70%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '16',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:59, name:wording[10]},
                {value:26, name:wording[11]},
                {value:2, name:wording[12]},
                {value:9, name:wording[13]},
                {value:4, name:wording[14]}
            ]
        }
    ]
};

function initChart(){
    setTimeout(function(){
        if(document.getElementById('echarts1')) {
            var eChart1 = echarts.init(document.getElementById('echarts1'));
            var eChart2 = echarts.init(document.getElementById('echarts2'));
            eChart1.setOption(option1);
            eChart2.setOption(option2);
        }
    },20)
}
try {
    initSwiper();
    initChart();
} catch(e) {
    console.warn(e)
}