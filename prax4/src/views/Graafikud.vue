<template>
    <div>
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col">
                    <h3>Andmed</h3>
                </div>
            </div>
            <div class="row text-center">
                <div class="col">
                    <h5>Siit leiate erinevaid andmeid autotööstuse kohta</h5>
                </div>
            </div>
        </div>


        <div class="row graph-row">
            <div class="col-6">
                <h5 class="chart_info">BMW 3. seeria tootmismahud põlvkonna kaupa, tuhandetes</h5>
                <v-chart :options="firstGraph" class="echarts"/>
                <div class="link_div">
                    <a href="https://en.wikipedia.org/wiki/BMW_3_Series" class="chart_link">Viide</a>
                </div>
            </div>
            <div class="col-6">
                <h5 class="chart_info">BMW M3 võimsus põlvkonna kaupa, kW</h5>
                <v-chart :options="secondGraph" class="echarts"/>
                <div class="link_div">
                    <a href="https://en.wikipedia.org/wiki/BMW_M3" class="chart_link">Viide</a>
                </div>
            </div>
        </div>
        <div class="row graph-row">
            <div class="col-6">
                <h5 class="chart_info">Autotootjate turuosa 2019. aastal, %</h5>
                <v-chart :options="thirdGraph" class="echarts"/>
                <div class="link_div">
                    <a href="https://focus2move.com/world-car-group-ranking/" class="chart_link">Viide</a>
                </div>
            </div>
            <div class="col-6">
                <h5 class="chart_info">BMW 2002.a. e46 võimsus mudeli kaupa, kW</h5>
                <v-chart :options="fourthGraph" class="echarts"/>
                <div class="link_div">
                    <a href="https://en.wikipedia.org/wiki/BMW_3_Series_(E46)" class="chart_link">Viide</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .echarts {
        width: 450px;
        height: 250px;
        background-color: beige;
        margin: auto;
    }

</style>

<script>
    import ECharts from 'vue-echarts/components/ECharts'
    import 'echarts/lib/chart/bar'
    import 'echarts/lib/component/polar'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/chart/pie'
    import seeria3Json from '../assets/json/3_seeria.json' // http://www.e38.org/BMWProductionData.pdf
    import m3Json from '../assets/json/m3.json' // https://en.wikipedia.org/wiki/BMW_M3
    import marketJson from '../assets/json/turuosad.json'   // https://focus2move.com/world-car-group-ranking/
    import seeria3power from '../assets/json/3_seeria_power.json' // https://en.wikipedia.org/wiki/BMW_3_Series_(E46)

    export default {
        components: {
            'v-chart': ECharts
        },
        data: function () {

            return {
                firstGraph: {
                    xAxis: {
                        type: 'category',
                        data: seeria3Json.polvkonnad
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: seeria3Json.mahud,
                        type: 'bar'
                    }]
                },
                secondGraph: {
                    xAxis: {
                        type: 'category',
                        data: m3Json.polvkonnad
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: m3Json.kw,
                        type: 'line',
                        smooth: true
                    }]
                },
                thirdGraph: {
                    series: [
                        {
                            type: 'pie',
                            radius: '75%',
                            center: ['50%', '50%'],
                            data: [
                                {value: marketJson.Volkswagen, name: 'Volkswagen'},
                                {value: marketJson.Toyota, name: 'Toyota'},
                                {value: marketJson.Renault, name: 'Renault'},
                                {value: marketJson.GM, name: 'GM'},
                                {value: marketJson.Hyundai, name: 'Hyundai'},
                                {value: marketJson.Ford, name: 'Ford'},
                                {value: marketJson.Honda, name: 'Honda'},
                                {value: marketJson.Muu, name: 'Muu'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            animationType: 'scale',
                            animationEasing: 'elasticOut'
                        }
                    ]
                },
                fourthGraph: {
                    xAxis: {
                        type: 'category',
                        data: seeria3power.mudel
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: seeria3power.power,
                        type: 'line',
                        smooth: true
                    }]
                },
            }
        }
    }
</script>
