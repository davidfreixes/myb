import { Container, Title, Text, Paper, Group } from "@mantine/core";
import Image from "next/image";

export default function ArticlePerfectYacht() {
  return (
    <Container className="py-12 max-w-[1400px]">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
        <Image
          src="/img/articles/hero.jpg?height=100&width=100"
          alt="Yate navegando al atardecer"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-8 text-white">
          <Title order={1} className="text-4xl md:text-5xl font-bold mb-4">
            Cómo elegir el yate perfecto: el sueño de navegar hecho realidad
          </Title>
        </div>
      </div>

      {/* Author Info */}
      <Paper className="p-4 mb-8" radius="md" withBorder>
        <Group>
          <div>
            <Text size="sm" className="text-gray-600">
              Escrito por
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
          La brisa marina acaricia tu rostro mientras observas el horizonte
          interminable, rodeado de azul y de calma. Tener un yate propio es
          mucho más que una cuestión de lujo: es un sueño de libertad, de
          aventuras compartidas y de una relación íntima con el mar...
        </Text>

        <div className="flex flex-col md:flex-row gap-14 my-12 justify-between">
          <Image
            src="/img/articles/yacht-hidden-bay.jpg?height=600&width=800"
            alt="Yate en una cala de Menorca"
            width={800}
            height={600}
            className="rounded-lg w-[350px]"
            />
          <div>
            <h2 className="text-2xl text-primary font-bold mb-4">
              Una decisión personal
            </h2>
            <Text className="text-lg">
              Elegir un yate es, ante todo, una decisión profundamente personal.
              Cada navegante tiene su propia visión de lo que significa surcar
              los mares: algunos buscan velocidad y adrenalina, mientras que
              otros anhelan la tranquilidad de largas jornadas fondeados en
              calas escondidas...
            </Text>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          Infinitas opciones
        </h2>
        <Text className="text-lg mb-8">
          En el mundo de los yates, las opciones son infinitas. Desde los
          estilizados yates a motor que evocan velocidad y sofisticación hasta
          los clásicos veleros que susurran historias de exploradores y
          navegantes intrépidos, cada embarcación tiene su propia alma...
        </Text>

        <div className="my-12 relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/img/articles/yate-lujo-vela.jpg"
            alt="Interior de un yate de lujo"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          Mantenimiento y cuidados
        </h2>
        <Text className="text-lg mb-8">
          Un aspecto clave al comprar un yate es considerar su mantenimiento. La
          vida en el mar es tan maravillosa como desafiante, y cada embarcación
          requiere un cuidado constante para mantenerse en óptimas
          condiciones...
        </Text>

        <div className="flex flex-col md:flex-row gap-14 my-12 justify-between">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              La dimensión cultural de Menorca
            </h2>
            <Text className="text-lg">
              En Menorca, donde el mar es parte esencial de la identidad local,
              la selección de un yate adquiere una dimensión cultural. La isla,
              con sus calas idílicas y sus aguas cristalinas, es el escenario
              perfecto para disfrutar de una embarcación propia...
            </Text>
          </div>
          <div className="flex w-full">
            <Image
              src="/img/articles/menorca-bay.jpg"
              alt="Vista aérea de una cala de Menorca"
              width={800}
              height={600}
              className="rounded-lg w-[350px]"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-primary">
          La importancia de probar
        </h2>
        <Text className="text-lg mb-8">
          Es también fundamental probar antes de decidir. A menudo, los
          compradores primerizos subestiman la importancia de experimentar el
          yate en acción...
        </Text>

        <h2 className="text-2xl font-bold my-4 text-primary">
          Aprendizaje continuo
        </h2>
        <Text className="text-lg mb-8">
          El momento de la compra es también una oportunidad para aprender.
          Durante el proceso, cada conversación con un broker es una lección
          sobre técnica, navegación y estilo de vida...
        </Text>

        <div className="my-12 p-8 bg-gray-50 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-primary">
            La dimensión emocional
          </h2>
          <Text className="text-lg italic">
            &quot;Comprar un yate es una inversión en sueños y en recuerdos
            futuros. Es imaginarse navegando al atardecer, compartiendo risas
            con amigos o disfrutando de la soledad del mar abierto...&quot;
          </Text>
        </div>

        <Text className="text-xl leading-relaxed mb-8">
          Elegir el yate perfecto es un proceso que combina razón y pasión,
          práctica y sueño. En Menorca, el mar siempre ha sido un testigo
          silencioso de grandes aventuras, y empresas como Menorca Yacht Brokers
          están allí para asegurarse de que cada navegante encuentre su propio
          camino en el azul infinito...
        </Text>
      </div>
    </Container>
  );
}
