import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, StyleSheet, ScrollView, Image } from 'react-native'


const images = [
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/img/Slide06.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_spot.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_cool.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_fap.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_kolo.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_deal.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_forfait_swim.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_pack_single.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_pack_friendly.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/sliders/slider_b_pack_business_plus.jpg',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/img/blue_user.png',
    'https://raw.githubusercontent.com/itzrilly/BlueAndMe/main/assets/images/img/blue_girls.png'
]

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const Slider = () => {

    const [ imgActive, setImageActive ] = useState(0)

    onchange = (nativeEvent) => {
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive) {
                setImageActive(slide)
            }
        }
    }

    return(
        <SafeAreaView>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator = {false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {
                        images.map((e, index) => {
                            return (
                                <Image
                                    key={e}
                                    resizeMode={'stretch'}
                                    source={{uri: e}}
                                    style={styles.wrap}
                                />
                            )
                        })
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) => 
                            <Text 
                                key={e} 
                                style={imgActive === index ? styles.dotActive : styles.dot }>
                                    ●
                            </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
    )

}

export default Slider

const styles = StyleSheet.create({
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: 'dodgerblue'
    },
    dot: {
        margin: 3,
        color: 'skyblue',
    }
})