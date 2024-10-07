import * as React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

type TopProps = {
    isMain: boolean;
    title: string;
};

const Top: React.FC<TopProps> = (isMain, title) => {
    if (isMain){
  	    return (
    		<View style={styles.top}>
      			<Image style={styles.iconLeftArrow} resizeMode="cover" source={require("../assets/images/icon_left_arrow.png")} />
      			<Text style={styles.travelMaiker}>{title}</Text> 
    		</View>);
    }
    else{
        return (
    		<View style={styles.top}>
      			<Image style={styles.bead} resizeMode="cover" source={require("../assets/images/bead.png")} />
      			<Text style={styles.travelMaiker}>{title}</Text> 
    		</View>);
    }
};

const styles = StyleSheet.create({
    bead: {
        height: 40,
        width: 40
    },
  	iconLeftArrow: {
    		width: 35,
    		height: 35
  	},
  	travelMaiker: {
    		fontSize: 24,
    		fontWeight: "600",
    		color: "#000",
    		textAlign: "center"
  	},
  	top: {
    		backgroundColor: "#fff",
    		flex: 1,
    		width: "100%",
    		height: 50,
    		overflow: "hidden",
    		flexDirection: "row",
    		alignItems: "center",
    		paddingHorizontal: 16,
    		paddingVertical: 0,
    		gap: 34
  	}
});

export default Top;
