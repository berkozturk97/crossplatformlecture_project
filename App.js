import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Categories from "./src/views/Categories";
import Products from "./src/views/Product";
import Orders from "./src/views/Orders";
import { StatusBar } from "react-native";
import { ProductProvider } from "./src/context/ProductContext";
import { CategoryProvider } from "./src/context/CategoryContext";
import ProductDetail from "./src/views/ProductDetail";
////////
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { TabLabel } from "./src/components/tabmenu/TabLabel";
import { TabIcon } from "./src/components/tabmenu/TabIcon";
import CategoryUpdate from "./src/views/CategoryUpdate";
import CategoryAdd from "./src/views/CategoryAdd";
const Tab = createBottomTabNavigator();
const ProductsStack = createStackNavigator();
const CategoriesStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const Stack = createStackNavigator();

function ProductsStackScreen() {
  return (
    <ProductsStack.Navigator
      initialRouteName={"Products"}
      screenOptions={{
        headerTintColor: "blue",
        headerTitleAlign: "center",
        title: "Products",
      }}
    >
      <ProductsStack.Screen
        name="Products"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontSize: 30 },
          headerShown: false,
          headerTintColor: "white",
        }}
        component={Products}
      />
      <ProductsStack.Screen
        name="ProductsDetail"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTitleStyle: { fontSize: 30 },
          headerShown: false,
          headerTintColor: "white",
        }}
        component={ProductDetail}
      />
    </ProductsStack.Navigator>
  );
}

function CategoriesStackScreen() {
  return (
    <CategoriesStack.Navigator
      initialRouteName={"Categories"}
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "white",
        title: "Categories",
      }}
    >
      <CategoriesStack.Screen
        name="Categories"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          title: "Categories",
          headerShown: false,
        }}
        component={Categories}
      />
      <CategoriesStack.Screen
        name="CategoryUpdate"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          title: "Category Update",
          headerShown: false,
        }}
        component={CategoryUpdate}
      />
      <CategoriesStack.Screen
        name="CategoryAdd"
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          title: "Category Add",
          headerShown: false,
        }}
        component={CategoryAdd}
      />
    </CategoriesStack.Navigator>
  );
}

function OrdersStackScreen() {
  return (
    <OrdersStack.Navigator
      initialRouteName={"Orders"}
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "blue",
      }}
    >
      <OrdersStack.Screen
        name="Orders"
        options={{
          headerStyle: {
            backgroundColor: "white",
            borderTopColor: "transparent",
          },
          headerShown: false,
          headerTintColor: "white",
          title: "Orders",
        }}
        component={Orders}
      />
    </OrdersStack.Navigator>
  );
}

function TabStackScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white",
        style: {
          borderBottomWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="ProductsTab"
        component={ProductsStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <TabLabel title={"Products"} focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon size={size} focused={focused} iconName={"products"} />
          ),
        }}
      />
      <Tab.Screen
        name="CategoriesTab"
        component={CategoriesStackScreen}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <TabLabel title={"Categories"} focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon size={size} focused={focused} iconName={"categories"} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: ({ focused, color }) => (
            <TabLabel title={"Orders"} focused={focused} />
          ),
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon size={size} focused={focused} iconName={"orders"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CategoryProvider>
        <ProductProvider>
          <StatusBar backgroundColor="black" barStyle="dark-content" />
          <Stack.Navigator>
            <Stack.Screen
              name="TabNav"
              component={TabStackScreen}
              options={{ headerShown: false, animationEnabled: false }}
            />
          </Stack.Navigator>
        </ProductProvider>
      </CategoryProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 20,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: "center",
    fontSize: 15,
  },
});

/*
<Router history={customHistory} >
<StatusBar backgroundColor="black" barStyle="light-content" />
<View style={styles.container}>
  <CategoryProvider>
    <ProductProvider>
      <Route exact path="/" component={Products} />
      <Route path="/categories" component={Categories} />
      <Route path="/productDetail/:id" component={ProductDetail} />
      <Route path="/orders" component={Orders} />
      <Navbar />
    </ProductProvider>
  </CategoryProvider>
</View>
</Router>
*/
