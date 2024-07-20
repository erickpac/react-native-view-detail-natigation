import { Link } from "expo-router";
import { Text, ScrollView, Pressable } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-50`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <Text className="text-white font-bold mb-8 text-2xl">
          Sobre el proyecto
        </Text>

        <Text className="text-white mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, eros nec ultricies varius, sapien justo mollis libero,
          nec ultricies nisl purus a justo. Integer ut sapien in metus tincidunt
        </Text>

        <Text className="text-white mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, eros nec ultricies varius, sapien justo mollis libero,
          nec ultricies nisl purus a justo. Integer ut sapien in metus tincidunt
        </Text>

        <Text className="text-white mb-4">
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          condimentum, eros nec ultricies varius, sapien justo mollis libero,
          nec ultricies nisl purus a justo. Integer ut sapien in metus tincidunt
        </Text>
      </ScrollView>
    </Screen>
  );
}
