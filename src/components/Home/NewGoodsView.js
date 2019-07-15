import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";
import NewGoodsItem from "./NewGoodsItem";
import { width } from "../../common/screen";
import RefreshListView, { RefreshState } from "../../common/refreshList";

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
    console.log("onHeaderRefresh");
  };
  onFooterRefresh = () => {
    console.log("onFooterRefresh");
  };
  render() {
    const { itemDatas, navigation } = this.props;
    return (
      <View style={styles.container}>
        <RefreshListView
          data={itemDatas}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderCell}
          refreshState={this.state.refreshState}
          onHeaderRefresh={this.onHeaderRefresh}
          onFooterRefresh={this.onFooterRefresh}
          horizontal={false}
          numColumns ={2} // 一行2个
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    // flexWrap: "wrap"
  }
});

export default NewGoodsView;
