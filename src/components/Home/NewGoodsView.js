import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";
import NewGoodsItem from "./NewGoodsItem";
import { width } from "../../common/screen";
import RefreshListView, { RefreshState } from "../../common/refreshList";
// const NewGoodsView = ({ itemDatas, navigation }) => (
//   <View style={styles.container}>
//     {itemDatas.map((value, index) => (
//       <NewGoodsItem
//         onPress={() => Actions.push('furitDetail', { value })}
//         name={value.name}
//         price={value.price}
//         image={value.image}
//         /* eslint-disable-next-line */
//         key={`list-${index}`}
//       />
//     ))}
//   </View>
// );

class NewGoodsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshState: RefreshState.Idle
    };
  }

  keyExtractor = (item, index) => {
    return index.toString();
  };

  renderCell = (info, index) => {
    const value = info.item;
    return (
      <NewGoodsItem
        onPress={() => Actions.push("furitDetail", { value })}
        name={value.name}
        price={value.price}
        image={value.image}
        /* eslint-disable-next-line */
        key={`list-${index}`}
      />
    );
  };
  onHeaderRefresh = () => {
    console.log('onHeaderRefresh')
  };
  onFooterRefresh = () => {
    console.log('onFooterRefresh')
  };
  render() {
    const { itemDatas, navigation } = this.props;
    return (
        <RefreshListView
          data={itemDatas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.onHeaderRefresh}
          onFooterRefresh={this.onFooterRefresh}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  item: {
    width: (width - 40) / 2,
    height: 150,
    flexDirection: "column",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
    backgroundColor: "#f5f6f5",
    borderRadius: 20
  },
  image: {
    width: 100,
    height: 100
  }
});

export default NewGoodsView;
