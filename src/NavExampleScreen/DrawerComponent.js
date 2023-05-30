import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import HomeImg from './../../assets/images/HomeImg.png';
import IcShare from './../../assets/images/ic_share.png';
import IcPlaystore from './../../assets/images/ic_playstore.png';
import IcLogout from './../../assets/images/ic_logout.png';
import IcUser from './../../assets/images/user1.png';
import IcInfo from '../../assets/svg/IcInfo';
import icLeft from './../../assets/images/ic_left.png';

const DrawerComponent = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstPartStyle}>
                <TouchableOpacity
                    style={styles.backTouchable} onPress={() => navigation.closeDrawer()}>
                    <Image
                        source={icLeft}
                        style={{ width: RFValue(12), height: RFValue(12) }}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTochable}>
                    <Image
                        style={[styles.btnImgView, { tintColor: '#005357' }]}
                        source={IcShare}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTochable}>
                    <Image
                        style={[styles.btnImgView, { tintColor: '#005357' }]}
                        source={IcPlaystore}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTochable}>
                    <Image
                        style={[styles.btnImgView, { tintColor: '#ff676a' }]}
                        source={IcLogout}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.secondPartStyle}>
                <View style={styles.userView}>
                    <Image
                        style={{ width: RFValue(34), height: RFValue(34) }}
                        source={IcUser}
                    />
                    <View style={{ marginRight: RFValue(10) }}>
                        <Text style={{ color: 'black' }}>Testing Anuraag Singh</Text>
                        <Text style={{ color: '#d6dae7', alignSelf: 'flex-end' }}>
                            TAS1234
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: RFValue(25), flexDirection: 'column' }}>
                    <TouchableOpacity style={styles.menuItemView} onPress={() => navigation.navigate('HSA')} >
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>HSA, Infertility report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView} onPress={() => navigation.navigate('DisCard')}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Discharge card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Hospital Event</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Language</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Branch</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Feedback</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <Image style={styles.menuItemImg} source={HomeImg} />
                        <Text style={styles.menuItemText}>Help Center</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemView}>
                        <IcInfo width={RFValue(15)} height={RFValue(15)} />
                        <Text style={styles.menuItemText}>About Candor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomView}>
                    <Image source={IcPlaystore} style={styles.menuItemImg} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.menuItemText}>MISSION</Text>
                        <Text style={styles.menuItemText}>
                            To contribute file fulfilments of families
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <Image source={IcPlaystore} style={styles.menuItemImg} />
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={styles.menuItemText}>VISION</Text>
                        <Text style={styles.menuItemText}>
                            Touching generations with excellent fertility care
                        </Text>
                    </View>
                </View>
                <Text
                    style={{
                        color: 'black',
                        alignSelf: 'flex-end',
                        marginTop: RFValue(60),
                    }}>
                    v1.0.41
                </Text>
            </View>
        </View>
    );
};

export default DrawerComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    firstPartStyle: {
        backgroundColor: '#f2f6f7',
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopLeftRadius: RFValue(30),
        borderBottomLeftRadius: RFValue(30),
    },
    btnTochable: {
        borderRadius: RFValue(30),
        backgroundColor: 'white',
        padding: RFValue(11),
        marginHorizontal: RFValue(22),
        marginVertical: RFValue(8),
        alignItems: 'center',
        elevation: 7,
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 10,
            height: 10,
        },
    },
    btnImgView: { width: RFValue(16), height: RFValue(16) },
    secondPartStyle: {
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(30),
        flex: 8,
    },
    userView: { flexDirection: 'row-reverse' },
    menuItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: RFValue(14),
    },
    menuItemImg: { width: RFValue(15), height: RFValue(15) },
    menuItemText: {
        color: 'black',
        marginLeft: RFValue(10),
    },
    bottomView: {
        marginTop: RFValue(20),
        flexDirection: 'row',
        paddingRight: RFValue(15),
    },
    backTouchable: {
        backgroundColor: '#eaeef3',
        padding: RFValue(12),
        borderRadius: RFValue(7),
        position: 'absolute',
        top: 0,
        marginLeft: RFValue(15),
        marginTop: RFValue(30),
        alignItems: 'center'
    }
});
