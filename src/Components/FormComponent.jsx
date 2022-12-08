import React from 'react'
import { Label, TextInput,Select,FileInput,Button } from 'flowbite-react'
const FormComponent = () => {
  return (
    <div>
    <form className="">
    <div className="flex justify-between">
    <div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authorname"
        value="Author Name"
      />
    </div>
    <TextInput
      id="authorname"
      type="text"
      sizing="sm"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authoremail"
        value="Author Email"
      />
    </div>
    <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="email" id="quantity" name="quantity" min="1000000000" max="9999999999"></input>

  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="authorph"
        value="Author Phone number"
      />
    </div>
    <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="number" id="quantity" name="quantity" min="1000000000" max="9999999999"></input>

  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="paperid"
        value="Paper ID"
      />
    </div>
    <TextInput
      id="paperid"
      type="text"
      sizing="sm"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="papertitle"
        value="Paper Title"
      />
    </div>
    <TextInput
      id="papertitle"
      type="email"
      sizing="md"
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="organization"
        value="Organization"
      />
    </div>
    <TextInput
      id="organization"
      type="text "
      sizing="md"
    />
  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="nationality"
        value="Nationality"
      />
    </div>
    <Select id="countries" required>
            <option>Indian</option>
            <option>Foreigner</option>
            
          </Select>
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="category"
        value="Category Of Registeration"
      />
    </div>
    <Select id="countries" required>
            <option>Student</option>
            <option>Acadamecian</option>
            <option>Industrialist</option>

            
          </Select>
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="large"
        value="Amount Paid"
      />
    </div>
    <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0' type="number" id="quantity" name="quantity" min="1000" max="100000"></input>
  </div>
</div>
<div className="flex flex-col gap-4">
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="nationality"
        value="Transaction ID"
      />

    </div>
    <TextInput
      id="large"
      type="number "
      sizing="md"
    />
    
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="category"
        value="Date Of Transaction"
      />
    </div>
    <input className='outline-none border-1 border-gray-300 rounded-lg bg-gray-50 ring-0'
      id="large"
      type="date"
      sizing="md"
    />
    
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="large"
        value="Payment Proof"
      />
    </div>
    <FileInput id="file" helperText="Upload High Resolution Copy" />
  </div>
</div>

</div>
{/* <Button type="submit" className='rounded-lg lg:mx-auto text-black bg-white '>Submit</Button> */}
<span className="ml-48">
<button
      type="submit"
      className="lg:ml-96 inline-flex justify-center rounded-lg outline-footerblue  ring-2 ring-footerblue  px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-footerblue hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
      Select Track
    </button>
    </span>
</form>
    </div>
  )
}

export default FormComponent