import { Container, Group, Paper, Text, Title } from "@mantine/core";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function ArticlePerfectYacht() {
  const { t } = useTranslation();

  return (
    <Container className="py-12 max-w-[1400px] border-b-2 border-t-2 border-primary">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src="/img/articles/hero.jpg?height=100&width=100"
          alt={t("mainPage.articlePerfectYacht.hero.alt")}
          fill
          className="object-cover"
          priority
          sizes="(min-width: 1024px) 800px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-8 text-white">
          <Title order={1} className="text-4xl md:text-5xl font-bold mb-4">
            {t("mainPage.articlePerfectYacht.hero.title")}
          </Title>
        </div>
      </div>

      {/* Author Info */}
      <Paper className="p-4 mb-8" radius="md" withBorder>
        <Group>
          <div>
            <Text size="sm" className="text-gray-600">
              {t("mainPage.articlePerfectYacht.author.label")}
            </Text>
            <Text size="lg" fw={500}>
              Martin Scholz
            </Text>
          </div>
        </Group>
      </Paper>

      {/* Article Content */}
      <div className="max-w-none">
        <Text className="text-xl leading-relaxed">
          {t("mainPage.articlePerfectYacht.content.intro")}
        </Text>

        <div className="flex flex-col md:flex-row gap-14 my-12 justify-between">
          <Image
            src="/img/articles/yacht-hidden-bay.jpg?height=600&width=800"
            alt={t("mainPage.articlePerfectYacht.content.image1.alt")}
            width={800}
            height={600}
            className="rounded-lg w-[350px]"
            sizes="(min-width: 1024px) 800px, 100vw"
          />
          <div>
            <h2 className="text-2xl text-primary font-bold mb-4">
              {t("mainPage.articlePerfectYacht.content.section1.title")}
            </h2>
            <Text className="text-lg">
              {t("mainPage.articlePerfectYacht.content.section1.text")}
            </Text>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          {t("mainPage.articlePerfectYacht.content.section2.title")}
        </h2>
        <Text className="text-lg mb-8">
          {t("mainPage.articlePerfectYacht.content.section2.text")}
        </Text>

        <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/img/articles/yate-lujo-vela.jpg"
            alt={t("mainPage.articlePerfectYacht.content.image2.alt")}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          {t("mainPage.articlePerfectYacht.content.section3.title")}
        </h2>
        <Text className="text-lg mb-8">
          {t("mainPage.articlePerfectYacht.content.section3.text")}
        </Text>

        <div className="flex flex-col md:flex-row gap-14 my-12 justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              {t("mainPage.articlePerfectYacht.content.section4.title")}
            </h2>
            <Text className="text-lg">
              {t("mainPage.articlePerfectYacht.content.section4.text")}
            </Text>
          </div>
          <div className="flex w-full">
            <Image
              src="/img/articles/menorca-bay.jpg"
              alt={t("mainPage.articlePerfectYacht.content.image3.alt")}
              width={800}
              height={600}
              className="rounded-lg w-[350px]"
              sizes="(min-width: 1024px) 800px, 100vw"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          {t("mainPage.articlePerfectYacht.content.section5.title")}
        </h2>
        <Text className="text-lg mb-8">
          {t("mainPage.articlePerfectYacht.content.section5.text")}
        </Text>

        <h2 className="text-2xl font-bold my-4 text-primary">
          {t("mainPage.articlePerfectYacht.content.section6.title")}
        </h2>
        <Text className="text-lg mb-8">
          {t("mainPage.articlePerfectYacht.content.section6.text")}
        </Text>

        <div className="my-12 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            {t("mainPage.articlePerfectYacht.content.section7.title")}
          </h2>
          <Text className="text-lg italic">
            &quot; {t("mainPage.articlePerfectYacht.content.section7.text")}
            &quot;
          </Text>
        </div>

        <Text className="text-xl leading-relaxed mb-8">
          {t("mainPage.articlePerfectYacht.content.conclusion")}
        </Text>
      </div>
    </Container>
  );
}
