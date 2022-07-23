import React from "react";
import {Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const locations = [
        {address: '341 Harrison Ave Boston, MA 02118', phone: '617-556-3922 # 11082', key: "5"},
        {address: '333 Washington Street, Downtown Crossing Boston, MA 02108', phone: '617-742-0783 # 49', key: "4"},
        {address: '285 Columbus Ave. Boston, MA 02116', phone: '617-236-8538 # 8972',key: "3"},
        {address: '700 Atlantic Ave., South Station Boston, MA 02111', phone: '617-737-7232 # 10174',key: "2"},
        {address: '780 Albany Street, 1st Floor Boston, MA 02118', phone: '617-488-7081 # 11274',key: "1"},
        {address: '155-157 Charles Street Boston, MA 02114', phone: '617-523-1028 # 260',key: "0"}
    ]

    return (
       <FlatList
            data={locations}
            renderItem= {({item}) => {
                return <Text>{item.phone}</Text>
            }}
       />
    );
};

const styles = StyleSheet.create({});

export default ListScreen;