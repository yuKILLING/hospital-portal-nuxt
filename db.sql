PGDMP  .                    |            HospitalProject    16.2    16.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16434    HospitalProject    DATABASE     �   CREATE DATABASE "HospitalProject" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
 !   DROP DATABASE "HospitalProject";
                postgres    false            �            1259    16435    devices    TABLE     �   CREATE TABLE public.devices (
    device_id integer NOT NULL,
    device_name character varying(150) NOT NULL,
    hospital_id integer NOT NULL,
    device_desk character varying(240) NOT NULL,
    device_link character varying
);
    DROP TABLE public.devices;
       public         heap    postgres    false            �            1259    16440    devices_device_id_seq    SEQUENCE     �   ALTER TABLE public.devices ALTER COLUMN device_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.devices_device_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16441 	   hospitals    TABLE     c  CREATE TABLE public.hospitals (
    hospital_id integer NOT NULL,
    hospital_name character varying(150) NOT NULL,
    tel_num character varying(100) NOT NULL,
    email character varying(150) NOT NULL,
    leader_name character varying(150) NOT NULL,
    leader_job_title character varying(150) NOT NULL,
    geo_pos character varying(150) NOT NULL
);
    DROP TABLE public.hospitals;
       public         heap    postgres    false            �            1259    16446    hospitals_hospital_id_seq    SEQUENCE     �   ALTER TABLE public.hospitals ALTER COLUMN hospital_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.hospitals_hospital_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    16457    users    TABLE     �   CREATE TABLE public.users (
    login character varying NOT NULL,
    password character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16456    users_user_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �          0    16435    devices 
   TABLE DATA           `   COPY public.devices (device_id, device_name, hospital_id, device_desk, device_link) FROM stdin;
    public          postgres    false    215   �       �          0    16441 	   hospitals 
   TABLE DATA           w   COPY public.hospitals (hospital_id, hospital_name, tel_num, email, leader_name, leader_job_title, geo_pos) FROM stdin;
    public          postgres    false    217   �       �          0    16457    users 
   TABLE DATA           9   COPY public.users (login, password, user_id) FROM stdin;
    public          postgres    false    220   �&       �           0    0    devices_device_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.devices_device_id_seq', 33, true);
          public          postgres    false    216            �           0    0    hospitals_hospital_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.hospitals_hospital_id_seq', 141, true);
          public          postgres    false    218            �           0    0    users_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.users_user_id_seq', 1, true);
          public          postgres    false    219            %           2606    16448    devices devices_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT devices_pkey PRIMARY KEY (device_id);
 >   ALTER TABLE ONLY public.devices DROP CONSTRAINT devices_pkey;
       public            postgres    false    215            '           2606    16450    hospitals hospitals_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.hospitals
    ADD CONSTRAINT hospitals_pkey PRIMARY KEY (hospital_id);
 B   ALTER TABLE ONLY public.hospitals DROP CONSTRAINT hospitals_pkey;
       public            postgres    false    217            )           2606    16463    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220            *           2606    16451    devices fk_hospitals    FK CONSTRAINT     �   ALTER TABLE ONLY public.devices
    ADD CONSTRAINT fk_hospitals FOREIGN KEY (hospital_id) REFERENCES public.hospitals(hospital_id);
 >   ALTER TABLE ONLY public.devices DROP CONSTRAINT fk_hospitals;
       public          postgres    false    215    4647    217            �      x������ � �      �   �  x��[�R�X�-=��TE���� [E	��mDH���K���!f�"!�d2���ɘ��� ���+�lw���-#����.���������=���*�/�w������]���?�=�&X����U��y�{���w臞<���? �l��g~7����}��ׁP2�n�B��T����;�,�W�{����wJ�;<���˗�� �;�+�}��/[���ᵰ.AWt�0���2��ka�[�����R���'�3\�Op+��?/�M�u �6�?8��(Ï�`9�o/qM�6~{�^����B�i��JYh9��3�j�gk+��[�e�zhg�?�w�`��o���d�x,�\,��;�S�a�Vz�{E�ʨ��?�%�s,�
���{���e�����k��lsS�d}�i�;奕Zk�65����n��w���;���8<
��ElߠW���h�B�p{�p����>��깨���[��z�%����6w��c�@�\'����.9�E2�,����L�Ÿ���KX�5b�����ɺ��ݑ�{<*n����A�rc����Ky���+|3X-�qP�!�X�0��'z�	�ؘ.��`�D�\�-�����G!8��j�;���ɭj{�{g�6�O���t�	��g�_��ȢX��xF��	Y�u�c��sNQ�����ݿn���#��X�l�����-�B=�;��0h��:�"����z�~QH��AK�E��I��^�p��`��l
���;N�_{�ϙ��E�Ʈ�v�
wɤ]2M����VZ�n˥�������O�����.������N����ai��^x$ZZ�F�����胇n��a��Ȓ�������	9��⻆_R���[��[@�ò�������4?�P��/8�;�Dz���x���&��K��c���}@ɲ��L��7������2�0|����xaq���ٖ�:xc���m(��]ɐTC�m���g49�{d�	��^�L� �|��	�S�gMC�sabB���23�9z�F��#��l�2F!{�w�!S�+U$E�4[x�6�������ȁ���\����9�|@βN^z�=))Œ'Aj�2J3�e������K���O(C0U]��Q0A �Ս� L���$Y�Γ�'m�:/�r�ޏ4��[$e��;���j��.��q"�tF�-�/����;j�0��l�2|VU��Ɛ�����Ι�b?2�N��c�>ؾ�����I�r�����5�GTv?zп+���u[�7���	zx��B��sBQ���D���d?j^�ėA����-8�O3E���
�m�w;���g�{ۺ�kB�i!~�������{��y�<�����i%f�B.���Ԛ21��1�JW8�%Z��n�|�^�j��	�S��'�`���lc2 %����rop?�^d^�r�՘*��H������WpC��HK{aU`(��Q�����+2-�L�Sh�[�n��h��'fη��ʸ��i�~,g� Uܗ�ƌM<�eto8WDTf�����uH4��Nf��Y wLI�Z���j;QG���(�u����C��,���x-4�.E�4G�����C�ՌʚqJ��br�@�h��b���=�(��F\O��@W�O�?���C9��.+v���M�S*�u	���dy���2E[����T&K�%��W�ǲ�V��uy�̣�QZWTɰ�yg8w~ ��|	2H�ġx�6w�:�����<��ȶhg� �ܟ�+�d:��f�N��AI�����C��C
37�������V���51Sg���e�������%b�e�~қ1Kd�+{ܵ����x�+��\_�gu�9�2�l��S�9�=�6��ʛ}�C��E�:5O`Ej���В����wD;��� �ς:�����OUS�|��Hf'DwTnn[	~���@����,��i睅�ƌ�x�&5�%�.Yӣ�@�Қ����?$�U�8п��_��g?��g����L�� �?萋d	�4���H�! �Z�lʅP�b8RP^K���h��B,��Z~F��N�[�ί�Q@�Kt�8�'����r9,�☵�y�ȋ���%|D�� )�'nVg�`���T���a�����t�� �n7#7.�D{�h�"n�q$����!��PJ�"ɊT�Mgu�=�WS5�P�������� �w�LQ����,��rT�=/V�$[�[o��W`E���bd�D��X�����|>z��=���V�:V�$��JFa���8nqHs���n����&�$C��b���@�|+���c� �a�;fk1Q��Q�A��L�CÙ�N�ҳg�d��>�͠�U,���0��:�6j��]ޥ0�z�/Bw7+��5^��X��C���N���������C�1	��Q8u������g�U�$�������'����� M��Hni�m/�fk�j�����i����{�ܣ.�&�r��1L�D�d��L��)r��ҔGX�I������X(y|����]��r-	f���^��!��*���u�72+�+�<&V�B2;���IN5$P;���Im�qcX���@'��7|��D����ٺֺar�d(�hX��?�,AA�՗���ٶ*�f����݌���e�yѤiK!%K�O�J��.^yGL����)˭�����sHSڔ�zC#p�KT�������
�4�q�ny4G��d��Z���5R�H.eH팪䖀������P8�h��(�ܢBj'�U�S%ٮ4������7��O�=��\~���	-��>��*EPE�Ȓb
�n��$�>5t�l���~Y�8Z#;����lQ�3��$�j�oi�H��6���{�X�?(q�bx~�Mz����g��I7H��RŔTw�^-�@�����߼%�S�Q��iN�-����:��v��E�u�=�,!��,�ͬ�Js�v�.^��B����ɥ�.�S_8#��Ŋ*��nO�J4����&�m�`�����d�(�%i��ZYғ��Nk�9�N��]FnCG�	�?��#�
�tVm��������dob����>�����D���Qb�6f?�{����!�D���gh�XLt�j���)��-��Z���8(��i��z��|
L��%�;C8>�n�򝎧d�r��W�5�����f5گX{{�r��8��ٜ�æ�X<2���0��aU�6� F����q�9i�n8��,@%9�gs��͒�RS��N �'��wYQy��cd�c~B8yvx��sgDhPYi�i	K�n�Yv��\YKxc1 ���?(W�Uy�DXfg<�Nq�8*�!X��g��}�� ��3�?+aS����?�i�B����L5?;�q��BЅJn[�ډ���[�RVd<����i"21,�Y��?�q��_���!c��tQ M��T��J�s�QY����|ԡ��	��xj�5���U�m�zC��oy.�M}�>6z�5����;2�܏���>�2�De��`�5��kK�م��v��$��L�HgqX��5i�.�*3��:ˊR���D��'���i:�u�R�5�J/밸7�F���۲�ꮶ�~���D=�G�b!�Ru�N��%��2����Q�Bm�$p�0NBefG.�V�o�F�*�'�T���q�O�L�P��dC>ťb����-�n� �Gd�¶c8���q2p��vk5��hג�����}��v;�����U �7�u�:E�Ы�'#<��	d8h�@f�>�,����[��W$�ڄ�l�6���R���P�Ē�N2�)�du����}�NF��N�P�)
7�T��K� �B1xJ ��Ɛ��+s�G(X<`�^,�TKh���2Wrt��y�r3E$����h��P4�QhN��c�SR�^E����      �   X   x���1��*׀�ֱ�����!vS1�Kʕ��"t
����Gޱ�3M�yc�ZoWf��i
޵�ѫEuZ��Z��V!     