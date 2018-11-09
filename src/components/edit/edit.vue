<template>
  <v-list two-line>
    <EditItem
      :icon="'domain'"
      :label="'会社名'"
      :customer-key="'company'"
      :customer-value="customer.company"
      @on-edit-customer="editCustomer"
    ></EditItem>
    <EditItem
      :icon="'person'"
      :label="'担当者名'"
      :customer-key="'staff'"
      :customer-value="customer.staff"
      @on-edit-customer="editCustomer"
    ></EditItem>
    <EditItem
      :icon="'phone'"
      :label="'担当者電話番号'"
      :customer-key="'TEL'"
      :customer-value="customer.TEL"
      @on-edit-customer="editCustomer"
    ></EditItem>
    <EditItem
      :icon="'mail'"
      :label="'担当者Eメール'"
      :customer-key="'email'"
      :customer-value="customer.email"
      @on-edit-customer="editCustomer"
    ></EditItem>
    <EditItem
      :icon="'place'"
      :label="'所在地'"
      :customer-key="'address'"
      :customer-value="customer.address"
      @on-edit-customer="editCustomer"
    ></EditItem>
  </v-list>
</template>

<script>
  import EditItem from './editItem'

  export default {
    name: 'Edit',
    components: {
      EditItem
    },
    props: {
      customer: Object
    },
    methods: {
      editCustomer (key, val) {
        this.$emit('on-edit-customer', key, val)
      }
    },
  }
</script>
