"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";

export default function DashboardPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const accessTokenLocal = localStorage.getItem("accessToken");
    if (accessTokenLocal) {
      if (!open) router.push("/web-application-security");
    } else {
      router.push("/");
    }
  }, [open, router]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen antialiased rounded-md bg-neutral-950">
      <div className="w-full h-full overflow-auto">
        <div className="w-full max-w-4xl p-8 mx-auto">
          <h1 className="relative z-10 font-sans text-lg font-bold text-center text-transparent md:text-3xl lg:text-4xl bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600">
            About Web Application Security
          </h1>
          <p className="relative z-10 mx-auto my-4 text-sm text-center text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            alias, nesciunt sapiente pariatur magnam error perspiciatis nihil
            repellat quidem rerum minus reprehenderit ex soluta illum iste
            asperiores ullam dolor veniam? Nobis deserunt et distinctio, quam
            illum tempore accusamus autem dolorum perferendis beatae quasi
            tempora velit repudiandae quibusdam rem nisi alias ipsa quaerat
            aspernatur nihil nulla porro optio iure cupiditate. Expedita?
            Voluptatibus culpa blanditiis repellat quam praesentium expedita
            velit sit ipsam. Sint culpa eligendi nostrum molestiae tempora
            beatae officia quis consectetur fugiat. Quae nobis nulla atque
            ratione. Magni mollitia amet fugit? Nobis id repudiandae, sapiente
            provident, reprehenderit omnis odio, deleniti sed architecto ipsum
            cumque debitis voluptate culpa incidunt repellat esse! Soluta
            perferendis animi nisi natus eos assumenda necessitatibus. Ad, dicta
            voluptates? Et, at rem quo excepturi quas dolore corporis temporibus
            accusamus qui est odit culpa, ea dicta dolorem esse aperiam. Commodi
            itaque adipisci repudiandae maxime quibusdam facere quasi cum
            ducimus voluptatem? Quisquam molestiae, obcaecati placeat repellat
            est iusto illum debitis facere rerum praesentium reprehenderit
            officia cumque incidunt similique nesciunt deleniti, culpa sunt
            dolorem porro nobis explicabo ut sequi dolor tempore. Quae? Iste
            mollitia neque reiciendis, suscipit repellat laborum qui quidem sint
            eius, vel fuga saepe impedit vero perferendis voluptate animi totam
            sed sunt voluptates facilis nulla dolore, quibusdam cumque.
            Voluptates, harum. Dignissimos delectus sint asperiores, explicabo
            laudantium perferendis maiores nobis suscipit, quibusdam aperiam
            dicta quae beatae voluptate incidunt fuga laborum ex enim. Soluta
            asperiores impedit et neque, natus porro animi inventore. Reiciendis
            corporis, atque aliquid, quos explicabo libero ab expedita iste odio
            quo sed eaque doloremque quae ullam, eos qui! Laboriosam
            reprehenderit maxime earum non quasi doloribus voluptatum excepturi,
            facere cum. Repellat corporis rem placeat accusantium nobis officiis
            mollitia aspernatur incidunt, optio deserunt dignissimos impedit.
            Excepturi veniam, tempora qui reprehenderit ipsum repudiandae esse
            aut labore non, architecto impedit id debitis saepe! Itaque dicta
            neque dignissimos unde esse perspiciatis ut officia corrupti quidem.
            Quae aspernatur quaerat adipisci necessitatibus reiciendis, iusto
            consequuntur. Aperiam quisquam iusto omnis quo amet, consequuntur
            qui nisi atque rem? Aperiam maiores, esse quas beatae laborum iusto,
            omnis aut, facilis voluptatibus eius possimus autem voluptatum illum
            totam. Quibusdam expedita id ratione amet, pariatur alias.
            Aspernatur accusantium explicabo debitis repudiandae placeat.
            Accusamus maiores libero quis eos, labore officia doloremque iure
            cumque non vero ratione soluta. Nostrum, repellat sapiente! Delectus
            maiores cumque deleniti autem debitis! Quae eius nisi aspernatur
            ducimus fugit nesciunt. Eos laboriosam sapiente dolores consequuntur
            facilis perferendis laudantium sequi, quas aperiam ut. Ad rem
            expedita sunt eligendi exercitationem ab nulla perferendis
            aspernatur sequi, fuga, aliquid, optio voluptatum cumque omnis eius.
            Ex assumenda iure nulla quos inventore mollitia consequatur ducimus
            voluptatum earum a facere similique aliquam saepe pariatur odio,
            cupiditate repellendus nam. A, voluptatum velit. Saepe, molestiae
            eveniet. Necessitatibus, quasi autem! Dolorum deleniti sit nulla
            nam, natus fugit facere accusamus inventore error earum quod,
            temporibus, praesentium alias blanditiis neque soluta officia
            placeat expedita velit. Dolor eligendi repellendus incidunt, aut
            neque architecto. Cum autem dicta consectetur praesentium illum
            omnis dolores culpa rem enim perferendis tempore non reprehenderit
            vel ducimus nobis eaque doloribus impedit provident, odit inventore
            perspiciatis libero voluptates suscipit. Blanditiis, ea. Eum
            laudantium placeat nobis alias repellendus voluptas enim voluptates.
            Distinctio earum deleniti fugit possimus exercitationem! Rem
            incidunt similique corrupti numquam commodi mollitia unde iure quam.
            Suscipit cum consequatur necessitatibus corrupti? Animi libero
            consequatur in sunt quia dolor, possimus ex maiores rerum ad
            nesciunt laborum corrupti voluptatem impedit obcaecati similique
            adipisci veritatis! Quas ab reprehenderit assumenda nisi facilis
            beatae non vitae. Minus praesentium repellat necessitatibus placeat
            iste officia tempore ipsam laborum quo accusamus, recusandae cum,
            sunt incidunt neque voluptate atque alias vitae deleniti voluptates
            rem soluta sed? Earum itaque qui voluptates! Tempora maiores, sint
            aperiam voluptates quos voluptatem doloremque eveniet assumenda
            debitis consectetur labore, expedita vero distinctio odio est
            facilis rerum deleniti recusandae dicta veritatis et modi. Mollitia
            unde consectetur esse! Quae quasi velit, dolore assumenda esse quis
            tempore qui? Quaerat placeat iusto assumenda nemo earum nostrum
            harum consequatur delectus soluta officia perspiciatis recusandae
            quas, nobis commodi sed praesentium, odit repellat. Voluptatem
            architecto optio harum eos molestiae nisi vitae praesentium autem
            iure, adipisci recusandae quia ad, obcaecati excepturi quae id
            dolores ipsa fugiat cumque provident! Adipisci iusto repellendus
            esse cumque quasi? Nemo autem ipsa sit numquam facilis ut asperiores
            sunt, odit dolore aut in. Consequuntur et numquam deleniti mollitia
            necessitatibus, est distinctio facere saepe dignissimos officiis sit
            neque eligendi tempore quasi. Totam eos quaerat consequuntur
            architecto et quo animi voluptatem voluptatum possimus iusto?
            Tempora quaerat, dolorum possimus vero accusantium eaque. Sit
            molestias quos iure corporis aut accusamus quaerat velit, quas quo.
            Libero omnis quo nesciunt eaque earum voluptatum praesentium autem
            eius ipsam! Quisquam doloremque autem obcaecati illo, iste odit qui,
            fugiat voluptatem eaque facere eum eveniet quae alias numquam
            possimus debitis. Dicta at adipisci est! Corrupti autem, placeat,
            labore cumque aperiam voluptate earum dolores tenetur molestias vero
            laborum minima reiciendis a quae possimus! Nobis natus dolore quia
            adipisci, at quod error! Ipsum repellendus dignissimos
            reprehenderit! Tenetur iure optio natus cupiditate animi error nisi
            fuga impedit possimus, facilis distinctio officia omnis aliquid
            nostrum quia, illum placeat explicabo. Molestias pariatur id ipsam
            natus. Vero minima officia omnis, earum deleniti optio in quo culpa
            aut, repudiandae veniam facere quis maiores, pariatur quod
            accusantium ad blanditiis et fugiat sit beatae. Quae dicta quibusdam
            nobis consequuntur! Molestiae, maiores sequi. Inventore sint
            necessitatibus vitae facilis vel quod atque eveniet earum blanditiis
            veritatis consectetur illum nisi, aspernatur error ratione modi
            corrupti alias consequuntur enim voluptas aliquid magnam. Nobis?
            Blanditiis voluptatem suscipit sequi sint sed, incidunt aperiam
            dolorum maxime deserunt optio quis quos voluptatum officiis
            possimus? Omnis nostrum sit sunt, quam deserunt aspernatur
            perspiciatis iusto, dolorum inventore, quisquam exercitationem?
            Aperiam repellendus molestias, consectetur, minima itaque
            perferendis numquam animi tempore aspernatur, magni voluptates.
            Culpa nemo iure doloremque quasi! Tempore voluptate iure nesciunt
            magnam minus maxime cum dolorem corporis maiores quam! Ullam vel
            illum ratione deserunt eius quasi cumque officia alias iure libero
            illo odio nulla facilis perferendis, quod autem tempore officiis
            iusto sit ea dolorem, quas sapiente. Quod, fugit dolore. Qui
            expedita nobis at in dignissimos non, laboriosam doloribus excepturi
            obcaecati? Odit tenetur quasi delectus neque quis culpa eos
            excepturi sed fuga, illum quo hic cum accusamus porro assumenda.
            Molestiae. Illum aut cum voluptates reprehenderit odio quibusdam
            sequi blanditiis, minus nulla ullam! Modi iste et dolores omnis nam.
            Laborum earum dolores illo error repellendus facilis laudantium,
            velit mollitia magni nostrum. Id amet nisi laborum doloribus
            tempora? Recusandae dolor nesciunt nulla reiciendis ullam distinctio
            illo sit quos? Dignissimos, ea nisi quisquam, eius, amet non
            voluptate accusamus doloremque numquam nobis hic minus! Fugiat, amet
            voluptas veniam corporis quisquam voluptatem nam dicta sit non
            animi? Nostrum quas corporis iure nulla repellat consequuntur
            quaerat dignissimos accusamus. Tempora cupiditate repellat
            asperiores vitae enim dolor optio? Quo animi, vitae consectetur
            voluptatum minus nam natus modi atque magnam ipsa, numquam incidunt
            eveniet ullam molestiae? Voluptate reiciendis dolore sit
            exercitationem soluta molestias, quibusdam explicabo eius incidunt
            labore blanditiis. Dicta quam, cum eveniet sint consequuntur
            adipisci itaque. Temporibus explicabo facilis nihil veniam! Enim
            minus saepe ea recusandae provident voluptatem, ut beatae quia
            iusto, consequatur esse. Pariatur reprehenderit labore aperiam.
            Explicabo ad nisi, esse quasi eius voluptatem adipisci deleniti
            dolore cumque, voluptatum eaque alias laborum quas quis. Et,
            voluptate aliquam numquam tempore esse, facere consequatur illo
            neque culpa blanditiis explicabo. Ad nulla veniam animi cum, laborum
            molestias. Qui consectetur in quae modi odit hic porro debitis at
            illo voluptatem iste voluptatibus, molestiae aspernatur aut?
            Sapiente atque numquam accusamus vero vel. At sunt qui architecto
            rem saepe alias magni adipisci, sequi impedit unde aliquam atque
            quisquam maiores fugiat illum expedita perspiciatis et rerum
            molestiae non, debitis, nisi quis aliquid. Minus, ut. Harum tempore,
            animi facere maxime nemo dignissimos quasi debitis eos velit
            perspiciatis similique ex atque aliquid. Quisquam, itaque quo
            repudiandae possimus, hic vel molestias consequatur a quasi,
            expedita nostrum sapiente. Odio quas quaerat tempora vero quibusdam,
            omnis possimus ab vitae voluptates illum veritatis accusantium rerum
            amet atque quis explicabo magni molestiae obcaecati ratione.
            Obcaecati inventore quibusdam aliquid cupiditate, totam quidem! Est,
            nulla. Porro dolor error id, possimus doloremque, excepturi animi
            velit adipisci libero commodi quae temporibus dolorum, cum ullam
            facilis hic dolores. Cupiditate ducimus saepe, praesentium velit
            voluptatum doloribus sapiente! Doloribus modi rerum suscipit id
            autem quos molestiae molestias magni fuga beatae consectetur neque
            illum, consequatur fugiat praesentium iure? Laborum neque laudantium
            maiores recusandae placeat numquam doloribus facilis ipsam. Commodi!
            Rerum architecto natus dolor ipsam doloribus perspiciatis! Esse
            provident id, expedita consequuntur eligendi libero, autem,
            voluptatum fuga cumque iste minima quaerat. Quibusdam consequuntur,
            nesciunt accusamus laborum iusto facere odit rerum. Corrupti ea
            magni necessitatibus unde maiores voluptate voluptatibus ut sunt,
            recusandae, autem inventore? At vitae asperiores odio recusandae
            nostrum eos dicta id, placeat laborum enim, possimus ab doloribus
            eligendi assumenda. Recusandae tempora fugiat fugit ab blanditiis
            animi quis sint accusamus iusto eius qui impedit iure deserunt
            assumenda ex consequuntur veniam voluptatem adipisci reiciendis vel,
            nemo, distinctio voluptate quibusdam optio. Alias! Ab illo quibusdam
            tempore inventore delectus, voluptates accusantium sed possimus
            rerum similique doloremque consectetur soluta veritatis perspiciatis
            ducimus officiis quidem sapiente recusandae velit ut aperiam odio?
            Error delectus sint fugiat.
          </p>

          <Button
            onClick={() => setOpen(false)}
            className="relative z-10 w-full my-8 border rounded-lg border-neutral-800 focus:ring-2 focus:ring-teal-500 bg-neutral-950 hover:bg-neutral-900 ring ring-neutral-800 ring-offset-2 ring-offset-neutral-200"
          >
            Continue
          </Button>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
