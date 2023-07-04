import Image from "next/image";

export default function page() {
  return (
    <div> 
        <h2>
            About page
            </h2>
        <Image src= 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60' width={400} height={400}/>
        </div>
  )
}
