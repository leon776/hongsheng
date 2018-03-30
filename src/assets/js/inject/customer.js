var swiper2;
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
        text: '行业比例',
        x:'center',
        y:'center',
        textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
            color:'#ce2626'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        data:['工业','标签','汽车','家用电器','安保','无人机','消耗品','其他']
    },
    series: [
        {
            name:'行业比例',
            type:'pie',
            radius: ['50%', '75%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
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
                {value:9, name:'工业'},
                {value:14, name:'标签'},
                {value:5, name:'汽车'},
                {value:24, name:'家用电器'},
                {value:4, name:'安保'},
                {value:10, name:'无人机'},
                {value:5, name:'消耗品'},
                {value:29, name:'其他'},
            ]
        }
    ]
};
var option2 = {
    title : {
        text: '地区比例',
        x:'center',
        y:'center',
        textStyle: {
            fontSize: '30',
            fontWeight: 'bold',
            color:'#ce2626'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {d}%"
    },
    legend: {
        orient: 'horizontal',
        x: 'center',
        y: 'bottom',
        data:['华南','华中','华北','香港','海外']
    },
    series: [
        {
            name:'地区比例',
            type:'pie',
            radius: ['50%', '75%'],
            avoidLabelOverlap: true,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
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
                {value:59, name:'华南'},
                {value:26, name:'华中'},
                {value:2, name:'华北'},
                {value:9, name:'香港'},
                {value:4, name:'海外'}
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