<template>
  <div class="bg-white rounded-[20px] border-2 flex flex-col p-5 mb-3">
    <div class="flex justify-between items-start">
      <h1 class="font-black text-xl cursor-pointer capitalize" @click="$router.push(`/hospital/${hospital.hospital_id}`)">
        {{ hospital.hospital_name }}
      </h1>
      <img src="/assets/svgs/trash.svg" alt="trash" class="w-4 cursor-pointer" @click="$emit('deleteHospital', hospital.hospital_id)" v-show="token.length > 0">
    </div>

    <div class="flex flex-col gap-2 mt-4 phone3:flex-row">
      <div class="flex gap-1">
        <img src="/assets/svgs/phone.svg" class="w-4" />
        <span class="text-blue-500"> {{ hospital.tel_num }} </span>
      </div>
      <div class="flex gap-1">
        <img src="/assets/svgs/email.svg" class="w-4" />
        <span> {{ hospital.email }} </span>
      </div>
    </div>

    <div class="flex gap-1">
      <img src="/assets/svgs/location.svg" class="w-4" />
      <span class="capitalize">{{ hospital.geo_pos }}</span>
    </div>

    <div class="flex gap-2 mt-5">
      <img src="/assets/svgs/user.svg" class="w-9" />
      <div>
        <h1 class="font-bold capitalize">{{ hospital.leader_name }}</h1>
        <span class="capitalize">{{ hospital.leader_job_title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  hospital: Object,
});

const token = useToken();
</script>
