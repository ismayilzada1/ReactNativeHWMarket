import { StyleSheet, Text, View,Image  } from 'react-native';


const Categories=({title,items})=> {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>{title}</Text>

            <View style={styles.ContainerItem}>

                {items.map((item, index) => (
                    <View style={styles.item} key={index}>
                        {/*<View style={styles.itemImage}></View>*/}
                        <Image source={{ uri: item.imageUrl }} style={styles.itemImage} />
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>{`$${item.price}`}</Text>
                    </View>
                ))}

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"flex-start",
        maxHeight:210
    },
    title:{
        color:"#000",
        fontSize:24,
        fontStyle:"normal",
        fontWeight:"500",
        lineHeight:"normal",
        maxWidth: 200,
        marginHorizontal: 8,
    },
    ContainerItem:{
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
    },

    item:{
        flex:1,
        flexDirection:"column",
        alignItems:"flex-start",
        marginHorizontal: 8,
    },
    itemImage:{
        height:110,
        width:110,
        borderRadius:8,
        borderWidth:0
    },
    itemName:{
        color:"#000",
        fontSize:14,
        fontStyle:"normal",
        fontWeight:400,
    },
    itemPrice:{
        color:"#000",
        fontSize:14,
        fontStyle:"normal",
        fontWeight:600,
    }



});

export default Categories;