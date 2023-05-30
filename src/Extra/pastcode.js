//  In UITest tabBar using condition
{
  /* <View
        style={{
          margin: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={[
              styles.tabTouchable,
              {backgroundColor: btnNo == 0 ? '#50c833' : '#334b5f'},
            ]}
            onPress={() => {
              setbtnNo(0);
            }}>
            <Image
              source={Tab1Image}
              style={[
                styles.tabImage,
                {tintColor: btnNo == 0 ? 'white' : '#8e9aad'},
              ]}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={[
              styles.tabTouchable,
              {backgroundColor: btnNo == 1 ? '#50c833' : '#334b5f'},
            ]}
            onPress={() => {
              setbtnNo(1);
            }}>
            <Image
              source={Tab2Image}
              style={[
                styles.tabImage,
                {tintColor: btnNo == 1 ? 'white' : '#8e9aad'},
              ]}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={[
              styles.tabTouchable,
              {backgroundColor: btnNo == 2 ? '#50c833' : '#334b5f'},
            ]}
            onPress={() => {
              setbtnNo(2);
            }}>
            <Image
              source={Tab3Image}
              style={[
                styles.tabImage,
                {tintColor: btnNo == 2 ? 'white' : '#8e9aad'},
              ]}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.tabView}>
          <TouchableOpacity
            style={[
              styles.tabTouchable,
              {backgroundColor: btnNo == 3 ? '#50c833' : '#334b5f'},
            ]}
            onPress={() => {
              setbtnNo(3);
            }}>
            <Image
              source={Tab4Image}
              style={[
                styles.tabImage,
                {tintColor: btnNo == 3 ? 'white' : '#8e9aad'},
              ]}></Image>
          </TouchableOpacity>
        </View>
      </View> */
}
{
  /* {btnNo == 0 ? (
        <Tab1 />
      ) : btnNo == 1 ? (
        <Tab2 />
      ) : btnNo == 2 ? (
        <Tab3 />
      ) : (
        <Tab4 />
      )} */
}


//In msgItem for chechbox
{
  /* value={item.ischecked}
      onValueChange={val => {
        if (val) {
          dispatch(addExploreToSelected({...item, ischecked: true}));
          dispatch(setExploreChecked(item));
        } else {
          dispatch(removeExploreToSelected(item));
        }
      }}
      tintColor="white"
      isChecked={item.ischecked}
      onValueChange={() => {
        // dispatch(addExploreToSelected(item));
        setdata(prev => {
          return prev.map((val, i) => {
            console.log(i == index);
            return i == index ? {...val, ischecked: !val.ischecked} : val;
          });
        });
      }}
      checkBoxColor="white"
    */
}
