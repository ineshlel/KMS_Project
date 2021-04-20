import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import App from "../components/checkBox";
import Profile from "../components/profile";
import { COLORS } from "../constants";
import InfoForm from "./InfoForm";

const { width } = Dimensions.get("window");


export default class HeaderTabs extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        xTabThree: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateXTabThree: new Animated.Value(width),

        translateY: -1000
        
    };

    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            TabThree,
            translateX,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 90
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                   // useNativeDriver: true 
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100,
                    //useNativeDriver: true 
                }).start(),
                Animated.spring(translateXTabThree, {
                  toValue: width,
                  duration: 100,
                  //useNativeDriver: true ,
              }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabThree, {
                  toValue: 0,
                  duration: 100
              }).start()
            ]);
        }
    };

    render() {
        let {
            xTabOne,
            xTabTwo,
            xTabThree,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateXTabThree,
            translateY
        } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: "90%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 40,
                            marginBottom: 20,
                            height: 36,
                            position: "relative",
                        
                        }}
                    >
                        <Animated.View
                            style={{
                                position: "absolute",
                                width: "33%",
                                height: "100%",
                                top: 0,
                                left: 0,
                               backgroundColor: COLORS.blue,
                                borderRadius: 10,
                                transform: [
                                    {
                                        translateX
                                    }
                                ]
                            }}
                        />
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                              
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabOne: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 0 }, () =>
                                    this.handleSlide(xTabOne)
                                )
                            }
                        > 
                        <Text
                        style={{
                          color: active === 0 ? "#fff" : COLORS.blue,
                          fontSize:15,
                        }}
                    >
                        Information
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                               
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabTwo: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active: 1}, () =>
                                    this.handleSlide(xTabTwo)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 1 ? "#fff" : COLORS.blue,
                                    fontSize:15,
                                }}
                            >
                               CMPV
                            </Text>
                        </TouchableOpacity>
                                 <TouchableOpacity
                            style={{
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                               
                            }}
                            onLayout={event =>
                                this.setState({
                                    xTabThree: event.nativeEvent.layout.x
                                })
                            }
                            onPress={() =>
                                this.setState({ active:2}, () =>
                                    this.handleSlide(xTabThree)
                                )
                            }
                        >
                            <Text
                                style={{
                                    color: active === 2 ? "#fff" : COLORS.blue,
                                    fontSize:15,

                             }}
                            >
                              Evaluation
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <Animated.View
                            style={{
                               
                                transform: [
                                    {
                                        translateX: translateXTabOne
                                    }
                                ]
                            }}
                            onLayout={event =>
                                this.setState({
                                    translateY: event.nativeEvent.layout.height
                                })
                            }
                        >
                        <InfoForm/>


                        </Animated.View>

                        <Animated.View
                            style={{

                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -1000
                                    }
                                ]
                            }}
                        >
            
                         <InfoForm/> 
                        </Animated.View>
                        <Animated.View
                            style={{

                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                            
                        ><App/>

                        </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}