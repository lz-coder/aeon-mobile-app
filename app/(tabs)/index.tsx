import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import BoxIcon from "../../assets/images/box-icon.svg";
import CubeIcon from "../../assets/images/cube-icon.svg";
import RepairingIcon from "../../assets/images/repairing-icon.svg";
import CompareArrowIcon from "../../assets/images/compare-arrow-icon.svg";

const features = [
  {
    logo: RepairingIcon,
    title: "Automated Maintenance",
    text: "Daily system updates happen automatically while you work. Your running system is not affected until you reboot, keeping your workday consistent and avoiding any unexpected issues with your apps. ",
  },
  {
    logo: CompareArrowIcon,
    title: "Minimal Yet Functional",
    text: 'The base system is kept small and simple, but with everything you need for getting straight on with your tasks - including programming, gaming, media production and clerical work. ',
  },
  {
    logo: BoxIcon,
    title: "Distrobox",
    text: "Aeon ships with Distrobox configured to launch Tumbleweed containers, perfect for your development tools and projects."
  },
  {
    logo: CubeIcon,
    title: "Flatpak",
    text: "Flatpak is set up ready for you to find your favourite apps from flathub."
  }
];

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#009B77", dark: "#009B77" }}
      headerImage={
        <Image
          source={require("@/assets/images/Aeon-round-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Aeon Desktop</ThemedText>
        <ThemedText
          type="default"
          style={{ fontSize: 18, textAlign: "center" }}
        >
          The Linux Desktop for people who want to "get stuff done"
        </ThemedText>
      </ThemedView>
      {features.map((feature, index) => (
        <ThemedView style={styles.stepContainer} key={index}>
          <View style={styles.featureCard}>
            <feature.logo style={styles.featureLogo} />
            <ThemedText type="subtitle">{feature.title}</ThemedText>  
          </View>
          <ThemedText type="default">
            {feature.text}
          </ThemedText>
        </ThemedView>
      ))}
      <ThemedView style={styles.infosCardWho}>
        <ThemedText type="subtitle" style={{textAlign: 'center', fontSize: 24,}}>Who Is Aeon For?</ThemedText>
        <ThemedText type="default">
          Aeon is great for anyone who wants a computer that "just works"; in particular it is perfect for the "lazy developer" who prefers to spend their time getting things done while letting their desktop take care of itself. The OS is static, automated and reliable, letting you focus on your apps and work.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.infosCardTU}>
        <ThemedText type="subtitle" style={{textAlign: 'center', fontSize: 24, color: '#383838'}}>Transactional Updates</ThemedText>
        <ThemedText type="default" style={{color: '#383838'}}>
          - Aeon makes use of transactional-update to provide atomic updates utilising the power of btrfs snapshots. Your system is updated inside a new snapshot leaving your current system unaffected. 
        </ThemedText>
        <ThemedText type="default" style={{color: '#383838'}}>
          - If an update should fail for any reason the new snapshot can be discarded, ensuring your system remains bootable and functional regardless. 
        </ThemedText>
        <ThemedText type="default" style={{color: '#383838'}}>
          -  Snapshots contain your configuration in /etc, allowing you to rollback configuration changes too. 
        </ThemedText>
        <ThemedText type="default" style={{color: '#383838'}}>
          -  Your current RPM packages are supported by transactional-update, as well as most of the packages in Aeon's repos. 
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginBottom: 12
  },
  stepContainer: {
    gap: 8,
    marginBottom: 20,
  },
  reactLogo: {
    height: 150,
    width: 150,
    margin: "auto",
  },
  featureCard: {
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  featureLogo: {
    maxHeight: 50
  },
  infosCardWho: {
    backgroundColor: '#383838',
    borderRadius: 5,
    padding: 12
  },
  infosCardTU: {
    backgroundColor: '#4CB99F',
    borderRadius: 5,
    padding: 12
  }
});
